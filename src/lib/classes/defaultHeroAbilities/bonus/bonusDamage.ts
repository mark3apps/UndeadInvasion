/** @format */

import { IUnitAbilityParam } from "lib/classes/unitAbility/interfaces/IUnitAbilityParam"
import { UnitAbility } from "lib/classes/unitAbility/UnitAbility"
import { AbilityField } from "lib/resources/fields"

export class BonusDamage extends UnitAbility {
  get damage() {
    return this.getLevelField(AbilityField.ATTACK_BONUS) as number
  }

  set damage(value) {
    this.setLevelField(AbilityField.ATTACK_BONUS, value)
    this.incLevel()
    this.decLevel()
  }

  static override fromHandle(ability: IUnitAbilityParam) {
    return this.getObject(ability) as BonusDamage
  }
}
