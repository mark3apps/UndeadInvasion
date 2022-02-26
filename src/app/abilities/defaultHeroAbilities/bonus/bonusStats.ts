/** @format */

import { IUnitAbilityParam } from "lib/classes/unitAbility/interfaces/IUnitAbilityParam"
import { UnitAbility } from "lib/classes/unitAbility/UnitAbility"
import { AbilityField } from "lib/resources/fields"

export class BonusStats extends UnitAbility {
  get agility() {
    return this.getLevelField(AbilityField.AGILITY_BONUS) as number
  }

  set agility(value) {
    this.setLevelField(AbilityField.AGILITY_BONUS, value)
    this.incLevel()
    this.decLevel()
  }

  get strength() {
    return this.getLevelField(AbilityField.STRENGTH_BONUS_ISTR) as number
  }

  set strength(value) {
    this.setLevelField(AbilityField.STRENGTH_BONUS_ISTR, value)
    this.incLevel()
    this.decLevel()
  }

  get intelligence() {
    return this.getLevelField(AbilityField.INTELLIGENCE_BONUS) as number
  }

  set intelligence(value) {
    this.setLevelField(AbilityField.INTELLIGENCE_BONUS, value)
    this.incLevel()
    this.decLevel()
  }

  static override fromHandle(ability: IUnitAbilityParam) {
    return this.getObject(ability) as BonusStats
  }
}
