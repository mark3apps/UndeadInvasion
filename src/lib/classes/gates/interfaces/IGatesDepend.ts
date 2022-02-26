/** @format */

import { UnitTypes } from "app/define/unitTypes/UnitTypes"
import { ITriggers } from "lib/classes/triggers/interfaces/ITriggers"

export interface IGatesDepend {
  triggers: ITriggers
  unitTypes: UnitTypes
}
