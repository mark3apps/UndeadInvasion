/** @format */

import { Trigger } from "w3ts/index"

export interface ITriggers {
  UnitDies: Trigger
  UnitDying: Trigger
  unitOrdered: Trigger
  UnitAttacked: Trigger
  unitDamaged: Trigger
  unitCreated: Trigger
  unitEntersRegion: Trigger
  unitSummoned: Trigger
  unitTrained: Trigger
  UnitCasts: Trigger
  heroLevels: Trigger
  mapStart: Trigger
}
