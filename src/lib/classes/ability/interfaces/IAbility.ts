/** @format */

import { AbilityType } from "lib/classes/abilityType/abilityType"
import { Hero } from "lib/classes/hero/hero"
import { UnitAbility } from "lib/classes/unitAbility/UnitAbility"
import { Unit } from "w3ts/index"

export interface IAbility {
  abilType: AbilityType
  onEffectCast: () => void
  getUnitAbility: (unit: Unit) => unknown
  TriggerUnit: () => Unit | Hero
  UnitAbilityFromCast: UnitAbility
}
