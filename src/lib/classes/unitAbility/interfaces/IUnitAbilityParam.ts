/** @format */

import { Hero } from "lib/classes/hero/hero"
import { Unit } from "w3ts/index"
import { AbilityType } from "../../abilityType/abilityType"

export interface IUnitAbilityParam {
  unit: Unit | Hero
  abilType: AbilityType
}
