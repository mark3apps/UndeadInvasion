/** @format */

import { AbilityCast } from "lib/classes/abilityCast/AbilityCast"
import { AbilityEngine } from "lib/classes/abilityEngine/AbilityEngine"
import { ArcTagEngine } from "lib/classes/arcTag/ArcTagEngine"
import { DamageEngine } from "lib/classes/damageEvent/DamageEngine"
import { Abilities } from "lib/classes/defaultHeroAbilities/Abilities"
import { AbilityTypes } from "lib/classes/defaultHeroAbilities/abilityTypes"
import { HeroAttributes } from "app/define/heroAttributes/heroAttributes"
import { Logger } from "lib/classes/log/Log"
import { Triggers } from "lib/classes/triggers/triggers"
import { Gates } from "../lib/classes/gates/gates"
import { CameraSetups } from "./define/camSetups/CameraSetups"
import { Forces } from "./define/forces/Forces"
import { HeroAbilities } from "./define/heroAbilities/HeroAbilities"
import { ItemTypes } from "./define/itemTypes/ItemTypes"
import { Rectangles } from "./define/rectangles/rectangles"
import { Regions } from "./define/regions/regions"
import { Units } from "./define/units/units"
import { UnitTypes } from "./define/unitTypes/UnitTypes"

export class Game {
  private static instance: Game

  static getInstance() {
    if (!Game.instance) Game.instance = new Game()
    return Game.instance
  }

  private constructor() {
    FogEnableOff()
    FogMaskEnableOff()

    Logger.Information("Game Init Start")

    // Globals with no upstream Dependencies
    Logger.Information("No Up Dependencies")
    const unitTypes = UnitTypes.getInstance()
    const rects = Rectangles.getInstance()
    const camSetups = CameraSetups.getInstance()
    const itemTypes = ItemTypes.getInstance()
    const forces = Forces.getInstance()
    const abilCast = AbilityCast.getInstance()
    const units = Units.getInstance()
    const abilTypes = AbilityTypes.getInstance()
    const regions = Regions.getInstance({ rects: rects })
    const arcTagEngine = ArcTagEngine.getInstance()
    const triggers = Triggers.getInstance({})

    // Globals with upstream and downstream dependencies
    Logger.Information("Up and Down Dependencies")
    const heroAttr = HeroAttributes.getInstance({ itemTypes: itemTypes })
    const abilEngine = AbilityEngine.getInstance({ triggers: triggers, abilityCast: abilCast })
    const abils = Abilities.getInstance({ abilityEngine: abilEngine, abilityTypes: abilTypes, abilityCast: abilCast })
    const heroAbils = HeroAbilities.getInstance({ abilityTypes: abilTypes, abilityCast: abilCast, abilityEngine: abilEngine })

    //  Globals with Upstream Dependencies
    Logger.Information("Up Dependencies")
    Logger.Debug("DamageEngine")
    const damageEngine = DamageEngine.getInstance({ arcTagEngine: arcTagEngine, triggers: triggers })
    //Logger.Debug("Heroes")
    //const heroes = Heroes.getInstance({ triggers: triggers, forces: forces, rects: rects, abils: abils })
    Logger.Debug("gates")
    const gates = Gates.getInstance({ triggers: triggers, unitTypes: unitTypes })

    // Globals with Init Functions
  }
}
