/** @format */

import { IAbilitiesDepend } from "./interfaces/IAbilitiesDepend"
import { BonusArmor } from "lib/classes/defaultHeroAbilities/bonus/bonusArmor"
import { BonusAttackSpeed } from "lib/classes/defaultHeroAbilities/bonus/bonusAttackSpeed"
import { BonusDamage } from "lib/classes/defaultHeroAbilities/bonus/bonusDamage"
import { BonusMoveSpeed } from "lib/classes/defaultHeroAbilities/bonus/bonusMoveSpeed"
import { BonusStats } from "lib/classes/defaultHeroAbilities/bonus/bonusStats"

import { BonusLifeRegeneration } from "lib/classes/defaultHeroAbilities/bonus/bonusLifeRegeneration"
import { UnitAbility } from "../unitAbility/UnitAbility"
import { Ability } from "../ability/Ability"

export class Abilities {
  // Static
  protected static instance?: Abilities

  static getInstance(depend: IAbilitiesDepend) {
    if (!Abilities.instance) Abilities.instance = new Abilities(depend)
    return Abilities.instance
  }

  // Instance
  bonusCollection
  bonusDamage
  bonusArmor
  bonusStats
  bonusAttackSpeed
  bonusMoveSpeed
  bonusLifeRegeneration

  private constructor(depend: IAbilitiesDepend) {
    // Dependencies
    const abilTypes = depend.abilityTypes
    const abilCast = depend.abilityCast

    //
    // Bonus Abilities
    //

    this.bonusCollection = new Ability(depend, {
      abilType: abilTypes.bonusCollection,
      TriggerUnit: abilCast.CastingUnit,
      unitAbility: (unitAbil) => {
        return UnitAbility.fromHandle(unitAbil)
      },
    })
    this.bonusDamage = new Ability(depend, {
      abilType: abilTypes.bonusDamage,
      TriggerUnit: abilCast.CastingUnit,
      unitAbility: (unitAbil) => {
        return BonusDamage.fromHandle(unitAbil)
      },
    })
    this.bonusArmor = new Ability(depend, {
      abilType: abilTypes.bonusArmor,
      TriggerUnit: abilCast.CastingUnit,
      unitAbility: (unitAbil) => {
        return BonusArmor.fromHandle(unitAbil)
      },
    })
    this.bonusStats = new Ability(depend, {
      abilType: abilTypes.bonusStats,
      TriggerUnit: abilCast.CastingUnit,
      unitAbility: (unitAbil) => {
        return BonusStats.fromHandle(unitAbil)
      },
    })
    this.bonusAttackSpeed = new Ability(depend, {
      abilType: abilTypes.bonusAttackSpeed,
      TriggerUnit: abilCast.CastingUnit,
      unitAbility: (unitAbil) => {
        return BonusAttackSpeed.fromHandle(unitAbil)
      },
    })
    this.bonusMoveSpeed = new Ability(depend, {
      abilType: abilTypes.bonusMoveSpeed,
      TriggerUnit: abilCast.CastingUnit,
      unitAbility: (unitAbil) => {
        return BonusMoveSpeed.fromHandle(unitAbil)
      },
    })
    this.bonusLifeRegeneration = new Ability(depend, {
      abilType: abilTypes.bonusLifeRegeneration,
      TriggerUnit: abilCast.CastingUnit,
      unitAbility: (unitAbil) => {
        return BonusLifeRegeneration.fromHandle(unitAbil)
      },
    })
  }
}
