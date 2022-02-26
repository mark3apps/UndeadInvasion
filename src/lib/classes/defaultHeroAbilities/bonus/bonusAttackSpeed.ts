/** @format */

import { IUnitAbilityParam } from "lib/classes/unitAbility/interfaces/IUnitAbilityParam"
import { UnitAbility } from "lib/classes/unitAbility/UnitAbility"
import { AbilityField } from "lib/resources/fields"

export class BonusAttackSpeed extends UnitAbility {
  get attackSpeed() {
    return this.getLevelField(AbilityField.ATTACK_SPEED_INCREASE_ISX1) as number
  }

  set attackSpeed(value) {
    this.setLevelField(AbilityField.ATTACK_SPEED_INCREASE_ISX1, value)
    this.incLevel()
    this.decLevel()
  }

  static override fromHandle(ability: IUnitAbilityParam) {
    return this.getObject(ability) as BonusAttackSpeed
  }
}
