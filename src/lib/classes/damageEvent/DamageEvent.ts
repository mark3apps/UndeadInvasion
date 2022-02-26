/** @format */

import { AttackType, DamageType } from "lib/resources/types"
import { Unit } from "w3ts/index"
import { DamageModifier } from "./DamageModifier"

export class DamageEvent {
  source: Unit
  target: Unit
  modifier?: DamageModifier

  protected static last: DamageEvent

  constructor() {
    this.source = Unit.fromDamageSource()
    this.target = Unit.fromDamageTarget()
    DamageEvent.last = this
  }

  static getLast() {
    return DamageEvent.last
  }

  get attackType() {
    return BlzGetEventAttackType()
  }

  set attackType(value) {
    BlzSetEventAttackType(value)
  }

  get damageType() {
    return BlzGetEventDamageType()
  }

  set damageType(value) {
    BlzSetEventDamageType(value)
  }

  get damage() {
    return GetEventDamage()
  }

  set damage(value) {
    BlzSetEventDamage(value)
  }

  isSpell() {
    return this.attackType === AttackType.NORMAL
  }

  isAttack() {
    return this.damageType === DamageType.NORMAL
  }
}
