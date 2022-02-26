/** @format */

import { ArcTagEngine } from "lib/classes/arcTag/ArcTagEngine"
import { Triggers } from "lib/classes/triggers/triggers"

export interface IDamageEngineDepend {
  triggers: Triggers
  arcTagEngine: ArcTagEngine
}
