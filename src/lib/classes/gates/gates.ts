/** @format */

import { GateType } from "./gateType"
import { Gate } from "./gate"
import { IGatesDepend } from "./interfaces/IGatesDepend"
import { DamageEvent } from "lib/classes/damageEvent/DamageEvent"
import { Group, Rectangle, Anim } from "w3ts/index"

export class Gates {
  protected static instance: Gates

  static getInstance(depend: IGatesDepend) {
    if (!Gates.instance) Gates.instance = new Gates(depend)
    return Gates.instance
  }

  constructor(depend: IGatesDepend) {
    const triggers = depend.triggers
    const unitTypes = depend.unitTypes

    new GateType(unitTypes.DwarvenGateOpen, unitTypes.DwarvenGateClosed)
    new GateType(unitTypes.CastleGateOpen, unitTypes.CastleGateClosed)

    const g = new Group()
    g.enumUnitsInRect(Rectangle.getPlayableMap())

    g.firstLoop((u) => {
      if (u && GateType.get(u)) {
        new Gate(u)
      }
    })
    g.destroy()

    // Trigger Setup
    triggers.UnitDying.addAction(() => {
      const unit = DamageEvent.getLast().target
      if (unit.userData === 15) {
        const gate = Gate.fromUnit(unit)
        if (gate) gate.died()
      }
    })

    triggers.unitDamaged.addAction(() => {
      const event = DamageEvent.getLast()
      if (event.target.userData === 15 && event.damage > 5) {
        event.target.setAnimation(Anim.Gate.standHit)
      }
    })
  }
}
