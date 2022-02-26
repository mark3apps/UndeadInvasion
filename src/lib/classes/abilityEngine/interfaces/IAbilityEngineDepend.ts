/** @format */

import { IAbilityCast } from "lib/classes/abilityCast/interfaces/IAbilityCast"
import { ITriggers } from "lib/classes/triggers/interfaces/ITriggers"

export interface IAbilityEngineDepend {
  triggers: ITriggers
  abilityCast: IAbilityCast
}
