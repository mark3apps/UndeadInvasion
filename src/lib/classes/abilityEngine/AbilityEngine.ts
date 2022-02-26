/** @format */

import { Ability } from "../ability/Ability"
import { IAbilityEngineMap } from "./interfaces/IAbilityEngineMap"
import { IAbilityEngineDepend } from "./interfaces/IAbilityEngineDepend"
import { UnitAbility } from "../unitAbility/UnitAbility"

export class AbilityEngine {
  Attacked: IAbilityEngineMap[]
  Attacks: IAbilityEngineMap[]
  Dies: IAbilityEngineMap[]
  Kills: IAbilityEngineMap[]
  Casts: Map<number, Ability>

  protected static instance?: AbilityEngine

  static getInstance(depend: IAbilityEngineDepend) {
    if (!AbilityEngine.instance) AbilityEngine.instance = new AbilityEngine(depend)
    return AbilityEngine.instance
  }

  private constructor(depend: IAbilityEngineDepend) {
    // Prep Dependencies
    const triggers = depend.triggers
    const abilCast = depend.abilityCast

    this.Attacked = []
    this.Attacks = []
    this.Dies = []
    this.Kills = []
    this.Casts = new Map<number, Ability>()

    triggers.UnitAttacked.addAction(() => {
      // Unit Attacked
      for (let index = 0; index < this.Attacked.length; index++) {
        const element = this.Attacked[index].ability
        if (UnitAbility.exists(abilCast.AttackedUnit(), element.abilType)) element.onEffectCast()
      }

      // Unit Attacks
      for (let index = 0; index < this.Attacks.length; index++) {
        const element = this.Attacks[index].ability
        if (UnitAbility.exists(abilCast.AttackingUnit(), element.abilType)) element.onEffectCast()
      }
    })

    triggers.UnitDying.addAction(() => {
      // Unit Dies
      for (let index = 0; index < this.Dies.length; index++) {
        const element = this.Dies[index].ability
        if (UnitAbility.exists(abilCast.DamageTarget(), element.abilType)) element.onEffectCast()
      }
    })

    triggers.UnitDies.addAction(() => {
      // Unit Kills
      for (let index = 0; index < this.Kills.length; index++) {
        const element = this.Kills[index].ability
        if (UnitAbility.exists(abilCast.KillingUnit(), element.abilType)) element.onEffectCast()
      }
    })

    triggers.UnitCasts.addAction(() => {
      // Unit Casting
      const abilTrig = this.Casts.get(GetSpellAbilityId())
      if (abilTrig) abilTrig.onEffectCast()
    })
  }
}
