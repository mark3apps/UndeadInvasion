/** @format */

import { Coordinate } from "lib/interfaces/Coordinate"
import { Unit } from "w3ts/index"
import { AbilityType } from "../abilityType/abilityType"
import { Hero } from "../hero/hero"
import { IUnitAbilityParam } from "../unitAbility/interfaces/IUnitAbilityParam"
import { IAbilityCast } from "./interfaces/IAbilityCast"

export class AbilityCast implements IAbilityCast {
  protected static instance: AbilityCast

  static getInstance() {
    if (!AbilityCast.instance) AbilityCast.instance = new this()
    return AbilityCast.instance
  }

  private constructor() {}

  CastingUnit() {
    return Unit.fromCaster()
  }

  CastingHero() {
    return Hero.fromEvent()
  }

  AttackingUnit() {
    return Unit.fromAttacker()
  }

  AttackedUnit() {
    return Unit.fromAttacked()
  }

  KillingUnit() {
    return Unit.fromKilling()
  }

  DyingUnit() {
    return Unit.fromDying()
  }

  DamageSource() {
    return Unit.fromDamageSource()
  }

  DamageTarget() {
    return Unit.fromDamageTarget()
  }

  TargetUnit() {
    return Unit.fromSpellTarget()
  }

  AbilType() {
    return AbilityType.fromSpellEvent()
  }

  Target(): Coordinate {
    return { x: GetSpellTargetX(), y: GetSpellTargetY() }
  }

  AbilityParam(): IUnitAbilityParam {
    return { unit: this.CastingUnit(), abilType: this.AbilType() }
  }
}
