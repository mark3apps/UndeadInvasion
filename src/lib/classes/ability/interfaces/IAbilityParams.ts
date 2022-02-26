/** @format */

import { AbilityType } from "lib/classes/abilityType/abilityType"
import { Hero } from "lib/classes/hero/hero"
import { IUnitAbilityParam } from "lib/classes/unitAbility/interfaces/IUnitAbilityParam"
import { Unit } from "w3ts/index"

export interface IAbilityParams {
  unitAbility: (e: IUnitAbilityParam) => unknown
  TriggerUnit: () => Unit | Hero
  abilType: AbilityType
}
