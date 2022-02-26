/** @format */

import { UnitType } from "lib/classes/unitType/UnitType"
import { Coordinate } from "lib/interfaces/Coordinate"
import { MapPlayer } from "w3ts/index"

export type IUnitParam = {
  owner: MapPlayer
  type: UnitType
  coor: Coordinate
  facing?: number
  evade?: number
  critical?: number
  criticalMultiplier?: number
  lifesteal?: number
  spellDamage?: number
  spellResistance?: number
  shield?: number
}
