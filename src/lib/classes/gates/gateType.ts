/** @format */

import { UnitType } from "lib/classes/unitType/UnitType"
import { Unit } from "w3ts/index"

export class GateType {
  public openGate: UnitType
  public closedGate: UnitType

  private static map = new Map<number, GateType>()

  constructor(openGate: UnitType, closedGate: UnitType) {
    this.openGate = openGate
    this.closedGate = closedGate
    GateType.map.set(this.openGate.id, this)
    GateType.map.set(this.closedGate.id, this)
  }

  public static get(unit: Unit) {
    return GateType.map.get(unit.typeId)
  }
}
