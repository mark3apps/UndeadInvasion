/** @format */

import { BonusArmor } from "lib/classes/defaultHeroAbilities/bonus/bonusArmor"
import { BonusAttackSpeed } from "lib/classes/defaultHeroAbilities/bonus/bonusAttackSpeed"
import { BonusDamage } from "lib/classes/defaultHeroAbilities/bonus/bonusDamage"
import { BonusLifeRegeneration } from "lib/classes/defaultHeroAbilities/bonus/bonusLifeRegeneration"
import { BonusMoveSpeed } from "lib/classes/defaultHeroAbilities/bonus/bonusMoveSpeed"
import { BonusStats } from "lib/classes/defaultHeroAbilities/bonus/bonusStats"
import { Unit, Force } from "w3ts/index"
import { HeroType } from "../heroType/heroType"
import { UnitAbility } from "../unitAbility/UnitAbility"
import { IHeroDepend } from "./interfaces/IHeroDepend"
import { IHeroParam } from "./interfaces/IHeroParam"

export class Hero extends Unit {
  static readonly all: Hero[] = []
  static human: Hero[] = []
  static ai: Hero[] = []
  static PickedPlayers: Force

  public static fromHandle(handle: unit): Hero {
    return this.getObject(handle)
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggerUnit())
  }

  // Dependencies

  readonly heroType: HeroType

  private damageAbility
  private armorAbility
  private statsAbility
  private attackSpeedAbility
  private moveSpeedAbility
  private lifeRegenerationAbility

  constructor(depend: IHeroDepend, hero: IHeroParam) {
    super(hero)

    // Dependencies
    const abils = depend.abils

    // Get Hero Type
    this.heroType = HeroType.get(this.typeId) as HeroType

    // Add Hidden Collection for the extra Abilities
    const collection = abils.bonusCollection.getUnitAbility(this)
    collection.hide()
    collection.permanent = true

    // Add the Bonus Abilities to the Hero
    this.damageAbility = abils.bonusDamage.getUnitAbilityUnknown(this) as BonusDamage
    this.armorAbility = abils.bonusArmor.getUnitAbilityUnknown(this) as BonusArmor
    this.moveSpeedAbility = abils.bonusMoveSpeed.getUnitAbilityUnknown(this) as BonusMoveSpeed
    this.attackSpeedAbility = abils.bonusAttackSpeed.getUnitAbilityUnknown(this) as BonusAttackSpeed
    this.statsAbility = abils.bonusStats.getUnitAbilityUnknown(this) as BonusStats
    this.lifeRegenerationAbility = abils.bonusLifeRegeneration.getUnitAbilityUnknown(this) as BonusLifeRegeneration

    // Set the Bonus Abilities to Permanent
    this.damageAbility.permanent = true
    this.armorAbility.permanent = true
    this.moveSpeedAbility.permanent = true
    this.attackSpeedAbility.permanent = true
    this.statsAbility.permanent = true
    this.lifeRegenerationAbility.permanent = true

    // Add Starting Abilities
    for (let i = 0; i < this.heroType.heroAbilities.length; i++) {
      const heroAbility = this.heroType.heroAbilities[i]
      const ability = heroAbility.getUnitAbility(this)
      ability.permanent = true
      if (!heroAbility.starting) ability.disable()
      if (heroAbility.hidden) ability.hide()
    }

    // Add Starting Items
    if (this.heroType !== undefined) {
      // Add Attribute Items
      for (let n = 0; n < this.heroType.heroAttributes.length; n++) {
        const element = this.heroType.heroAttributes[n]

        for (let i = 0; i < element.items.length; i++) {
          const item = element.items[i].id
          this.addItemById(item)
        }
      }

      // Add Specific Hero Type Items
      for (let i = 0; i < this.heroType.items.length; i++) {
        const item = this.heroType.items[i].id
        this.addItemById(item)
      }
    }

    // Add to Hero Array
    Hero.all.push(this)

    if (this.owner.controller === MAP_CONTROL_COMPUTER) {
      Hero.ai.push(this)
    } else {
      Hero.human.push(this)
    }
  }

  updateAbilityTooltips = () => {
    for (let i = 0; i < this.abilityFours.length; i++) {
      const abilityType = this.unitAbilities.get(this.abilityFours[i])
      if (abilityType) {
        ;(abilityType as UnitAbility).updateTooltips()
      }
    }
  }

  // General Methods

  get lifeRegenerationBonus() {
    return this.lifeRegenerationAbility.lifeRegeneration
  }

  set lifeRegenerationBonus(value) {
    this.lifeRegenerationAbility.lifeRegeneration = value
  }

  get damageBonus() {
    return this.damageAbility.damage
  }

  set damageBonus(value) {
    this.damageAbility.damage = value
  }

  get armorBonus() {
    return this.armorAbility.armor
  }

  set armorBonus(value) {
    this.armorAbility.armor = value
  }

  get movementSpeedBonus() {
    return this.moveSpeedAbility.movementSpeed
  }

  set movementSpeedBonus(value) {
    this.moveSpeedAbility.movementSpeed = value
  }

  get attackSpeedBonus() {
    return this.attackSpeedAbility.attackSpeed
  }

  set attackSpeedBonus(value) {
    this.attackSpeedAbility.attackSpeed = value
  }

  get strengthBonus() {
    return this.statsAbility.strength
  }

  set strengthBonus(value) {
    this.statsAbility.strength = value
  }

  get agilityBonus() {
    return this.statsAbility.agility
  }

  set agilityBonus(value) {
    this.statsAbility.agility = value
  }

  get intelligenceBonus() {
    return this.statsAbility.intelligence
  }

  set intelligenceBonus(value) {
    this.statsAbility.intelligence = value
  }
}
