/** @format */

import { IUnitAbilityParam } from "lib/classes/unitAbility/interfaces/IUnitAbilityParam"
import { UnitAbility } from "lib/classes/unitAbility/UnitAbility"
import { AbilityField } from "lib/resources/fields"

export class BonusLifeRegeneration extends UnitAbility {
  get lifeRegeneration() {
    return this.getLevelField(AbilityField.AMOUNT_OF_HIT_POINTS_REGENERATED) as number
  }

  set lifeRegeneration(value) {
    this.setLevelField(AbilityField.AMOUNT_OF_HIT_POINTS_REGENERATED, value)
    this.incLevel()
    this.decLevel()
  }

  static override fromHandle(ability: IUnitAbilityParam) {
    return this.getObject(ability) as BonusLifeRegeneration
  }
}
