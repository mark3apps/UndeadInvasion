/** @format */

import { AbilityType } from "lib/classes/abilityType/abilityType"
import { Hero } from "lib/classes/hero/hero"
import { Coordinate } from "lib/interfaces/Coordinate"
import { Unit } from "w3ts/index"

export interface IAbilityCast {
  CastingUnit: () => Unit
  CastingHero: () => Hero
  TargetUnit: () => Unit
  AttackingUnit: () => Unit
  AttackedUnit: () => Unit
  DamageSource: () => Unit
  DamageTarget: () => Unit
  KillingUnit: () => Unit
  DyingUnit: () => Unit
  AbilType: () => AbilityType
  Target: () => Coordinate
}
