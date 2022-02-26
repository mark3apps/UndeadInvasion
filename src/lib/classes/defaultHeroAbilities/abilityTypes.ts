/** @format */

import { AbilityFour } from "w3ts/index"
import { AbilityType } from "../abilityType/abilityType"

export class AbilityTypes {
  private static instance?: AbilityTypes

  static getInstance() {
    if (!AbilityTypes.instance) AbilityTypes.instance = new AbilityTypes()
    return AbilityTypes.instance
  }

  static getInstanceNoCreate() {
    return AbilityTypes.getInstance()
  }

  bonusCollection
  bonusStats
  bonusDamage
  bonusArmor
  bonusAttackSpeed
  bonusMoveSpeed
  bonusLifeRegeneration

  private constructor() {
    //
    // Bonus Abilities
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    this.bonusCollection = new AbilityType({
      four: AbilityFour.BonusSpellBook,
    })
    this.bonusStats = new AbilityType({ four: AbilityFour.BonusStats })
    this.bonusDamage = new AbilityType({ four: AbilityFour.BonusDamage })
    this.bonusArmor = new AbilityType({ four: AbilityFour.BonusArmor })
    this.bonusAttackSpeed = new AbilityType({
      four: AbilityFour.BonusAttackSpeed,
    })
    this.bonusMoveSpeed = new AbilityType({
      four: AbilityFour.BonusMovementSpeed,
    })
    this.bonusLifeRegeneration = new AbilityType({
      four: AbilityFour.BonusLifeRegeneration,
    })
  }
}
