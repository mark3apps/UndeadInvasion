/** @format */

import { Unit } from "w3ts/index"
import { AbilityType } from "../abilityType/abilityType"
import { IUnitAbilityParam } from "./interfaces/IUnitAbilityParam"

export class UnitAbilityHandle {
  readonly unit
  readonly abilityType

  static initAbility: IUnitAbilityParam | undefined

  constructor(ability?: IUnitAbilityParam) {
    if (ability) {
      this.unit = ability.unit
      this.abilityType = ability.abilType
    } else {
      this.unit = (UnitAbilityHandle.initAbility as IUnitAbilityParam).unit
      this.abilityType = (UnitAbilityHandle.initAbility as IUnitAbilityParam).abilType
    }

    if (!UnitAbilityHandle.exists(this.unit, this.abilityType)) UnitAddAbility(this.unit.handle, this.abilityType.id)

    this.unit.unitAbilities.set(this.abilityType.four, this)
    this.unit.abilityFours.push(this.abilityType.four)
  }

  static initFromAbility() {
    return UnitAbilityHandle.initAbility !== undefined
  }

  // Static Methods
  static exists(unit: Unit, abilityType: AbilityType) {
    return GetUnitAbilityLevel(unit.handle, abilityType.id) >= 1
  }

  static fromHandle(ability: IUnitAbilityParam) {
    return this.getObject(ability)
  }

  protected static getObject(ability: IUnitAbilityParam): unknown {
    const obj = ability.unit.unitAbilities.get(ability.abilType.four)
    if (obj) {
      return obj
    }

    UnitAbilityHandle.initAbility = ability
    const newObj = new this()
    UnitAbilityHandle.initAbility = undefined

    return newObj
  }
}
