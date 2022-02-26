/** @format */

import { TargetType } from "../enums/TargetType"
import { EffectType } from "../enums/EffectType"
import { AbilityFour, BuffFour } from "w3ts/index"

export interface IAbilityTypeParam {
  four: AbilityFour | string
  buffFour?: BuffFour
  effectType?: EffectType
  targetType?: TargetType
  orderId?: number
  orderIdAutoOn?: number
  orderIdAutoOff?: number
  orderIdOff?: number
}
