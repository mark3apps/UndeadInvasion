/** @format */

import { AbilityType } from "lib/classes/abilityType/abilityType"
import { Hero } from "lib/classes/hero/hero"
import { IUnitAbilityParam } from "lib/classes/unitAbility/interfaces/IUnitAbilityParam"

export interface iHeroAbility {
  unitAbility: (e: IUnitAbilityParam) => unknown
  TriggerUnit: () => Hero
  abilType: AbilityType
  starting?: boolean
  ult?: boolean
  hidden?: boolean
}
