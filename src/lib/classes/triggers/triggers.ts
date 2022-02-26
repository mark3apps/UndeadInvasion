/** @format */

import { Trigger, Rectangle } from "w3ts/index"
import { ITriggers } from "./interfaces/ITriggers"
import { ITriggersDepend } from "./interfaces/ITriggersDepend"

export class Triggers implements ITriggers {
  UnitDies = new Trigger()
  UnitDying = new Trigger()
  unitOrdered = new Trigger()
  UnitAttacked = new Trigger()
  unitDamaged = new Trigger()
  unitCreated = new Trigger()
  unitEntersRegion = new Trigger()
  unitSummoned = new Trigger()
  unitTrained = new Trigger()
  UnitCasts = new Trigger()
  heroLevels = new Trigger()
  mapStart = new Trigger()

  protected static instance?: Triggers

  static getInstance(depend: ITriggersDepend) {
    if (!Triggers.instance) Triggers.instance = new Triggers(depend)
    return Triggers.instance
  }

  private constructor(depend: ITriggersDepend) {
    this.mapStart.registerTimerEvent(0.5, false)
    this.unitCreated.registerEnterRect(Rectangle.getPlayableMap())

    this.UnitAttacked.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
    this.unitDamaged.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
    this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
    this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER)
    this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER)
    this.unitOrdered.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER)
    this.unitSummoned.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON)
    this.unitTrained.registerAnyUnitEvent(EVENT_PLAYER_UNIT_TRAIN_FINISH)
    this.UnitCasts.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT)
    this.heroLevels.registerAnyUnitEvent(EVENT_PLAYER_HERO_LEVEL)
    this.UnitDies.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
    this.UnitDying.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DAMAGED)
  }
}
