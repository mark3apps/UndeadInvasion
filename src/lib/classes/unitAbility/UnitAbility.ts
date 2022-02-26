/** @format */

import { AbilityField } from "lib/resources/fields"
import { UnitAbilityHandle } from "./UnitAbilityHandle"
import { IUnitAbilityParam } from "./interfaces/IUnitAbilityParam"
import { Coordinate } from "lib/interfaces/Coordinate"
import { Widget } from "w3ts/index"
import { IAbilityCast } from "../abilityCast/interfaces/IAbilityCast"

export class UnitAbility extends UnitAbilityHandle {
  constructor(ability: IUnitAbilityParam) {
    if (UnitAbilityHandle.initFromAbility()) {
      super()
    } else {
      super(ability)
    }
  }

  get handle() {
    return BlzGetUnitAbility(this.unit.handle, this.abilityType.id)
  }

  // Blank "On" Trigger
  onEffect(cast: IAbilityCast) {}
  onEffectEnd(cast: IAbilityCast) {}

  isCastable(): boolean {
    return this.unit.isAlive() && this.unit.mana > this.manaCost && this.cooldownRemaining === 0 && this.level > 0
  }

  incLevel() {
    IncUnitAbilityLevel(this.unit.handle, this.abilityType.id)
  }

  decLevel() {
    DecUnitAbilityLevel(this.unit.handle, this.abilityType.id)
  }

  hasBuff(): boolean {
    return this.abilityType.buffFour ? this.unit.hasBuff(this.abilityType.buffFour) : false
  }

  castImmediate(): void {
    if (this.abilityType.orderId) this.unit.issueOrder(this.abilityType.orderId)
  }

  castTarget(targetWidget: Widget): void {
    if (this.abilityType.orderId) this.unit.issueTargetOrder(this.abilityType.orderId, targetWidget)
  }

  cast(dest: Coordinate): void {
    if (this.abilityType.orderId) this.unit.issueCoordinateOrder(this.abilityType.orderId, dest)
  }

  isCasting(): boolean {
    return this.unit.currentOrder === this.abilityType.orderId
  }

  set permanent(value: boolean) {
    UnitMakeAbilityPermanent(this.unit.handle, value, this.abilityType.id)
  }

  // Easy getters from Ability Class
  get activatedTooltip(): string {
    return BlzGetAbilityActivatedTooltip(this.abilityType.id, this.level - 1)
  }

  set activatedTooltip(value: string) {
    BlzSetAbilityActivatedTooltip(this.abilityType.id, value, this.level - 1)
  }

  get extendedTooltip(): string {
    return this.getLevelField(AbilityField.TOOLTIP_NORMAL_EXTENDED, this.level - 1) as string
  }

  set extendedTooltip(value: string) {
    this.setLevelField(AbilityField.TOOLTIP_NORMAL_EXTENDED, value, this.level - 1)
  }

  get tooltip(): string {
    return this.getLevelField(AbilityField.TOOLTIP_NORMAL, this.level - 1) as string
  }

  set tooltip(value: string) {
    this.setLevelField(AbilityField.TOOLTIP_NORMAL, value, this.level - 1)
  }

  get researchTooltip(): string {
    return BlzGetAbilityResearchTooltip(this.abilityType.id, this.level - 1)
  }

  set researchTooltip(value: string) {
    BlzSetAbilityResearchTooltip(this.abilityType.id, value, this.level - 1)
  }

  get researchExtendedTooltip(): string {
    return BlzGetAbilityResearchExtendedTooltip(this.abilityType.id, this.level - 1)
  }

  set researchExtendedTooltip(value: string) {
    BlzSetAbilityResearchExtendedTooltip(this.abilityType.id, value, this.level - 1)
  }

  get activatedExtendedTooltip(): string {
    return BlzGetAbilityActivatedExtendedTooltip(this.abilityType.id, this.level - 1)
  }

  set activatedExtendedTooltip(value: string) {
    BlzSetAbilityActivatedExtendedTooltip(this.abilityType.id, value, this.level - 1)
  }

  // Getters and Setters unique

  get areaOfEffect(): number {
    return this.getLevelField(ABILITY_RLF_AREA_OF_EFFECT) as number
  }

  set areaOfEffect(value: number) {
    this.setLevelField(ABILITY_RLF_AREA_OF_EFFECT, value)
  }

  get normalDuration(): number {
    return this.getLevelField(ABILITY_RLF_DURATION_NORMAL) as number
  }

  set normalDuration(value: number) {
    this.setLevelField(AbilityField.DURATION_NORMAL, value)
  }

  get heroDuration(): number {
    return this.getLevelField(ABILITY_RLF_DURATION_HERO, 0) as number
  }

  set heroDuration(value: number) {
    this.setLevelField(AbilityField.DURATION_HERO, value, 0)
  }

  get level(): number {
    return GetUnitAbilityLevel(this.unit.handle, this.abilityType.id)
  }

  set level(level: number) {
    SetUnitAbilityLevel(this.unit.handle, this.abilityType.id, level)
  }

  set name(value: string) {
    this.setField(ABILITY_SF_NAME, value)
  }

  get name(): string {
    return this.getField(ABILITY_SF_NAME) as string
  }

  get levels(): number {
    return this.getField(ABILITY_IF_LEVELS) as number
  }

  get levelSkip(): number {
    return this.getField(ABILITY_IF_LEVEL_SKIP_REQUIREMENT) as number
  }

  set levelSkip(value: number) {
    this.setField(ABILITY_IF_LEVEL_SKIP_REQUIREMENT, value)
  }

  get requiredLevel(): number {
    return this.getField(ABILITY_IF_REQUIRED_LEVEL) as number
  }

  set requiredLevel(value: number) {
    this.setField(ABILITY_IF_REQUIRED_LEVEL, value)
  }

  get isHeroAbility(): boolean {
    return this.getField(ABILITY_BF_HERO_ABILITY) as boolean
  }

  get isItemAbility(): boolean {
    return this.getField(ABILITY_BF_ITEM_ABILITY) as boolean
  }

  get cooldown(): number {
    return BlzGetUnitAbilityCooldown(this.unit.handle, this.abilityType.id, this.level - 1)
  }

  set cooldown(value: number) {
    BlzSetUnitAbilityCooldown(this.unit.handle, this.abilityType.id, this.level - 1, value)
  }

  get cooldownRemaining(): number {
    return BlzGetUnitAbilityCooldownRemaining(this.unit.handle, this.abilityType.id)
  }

  set cooldownRemaining(value: number) {
    BlzStartUnitAbilityCooldown(this.unit.handle, this.abilityType.id, value)
  }

  resetCooldown(): void {
    BlzEndUnitAbilityCooldown(this.unit.handle, this.abilityType.id)
  }

  get manaCost(): number {
    return this.getLevelField(ABILITY_ILF_MANA_COST) as number
  }

  set manaCost(value: number) {
    this.setLevelField(ABILITY_ILF_MANA_COST, value)
  }

  get manaCostAllLevels(): number[] {
    return this.getLevelFieldArray(ABILITY_ILF_MANA_COST) as number[]
  }

  set manaCostAllLevels(value: number[]) {
    this.setLevelFieldArray(ABILITY_ILF_MANA_COST, value)
  }

  get castTime(): number {
    return this.getLevelField(ABILITY_RLF_CASTING_TIME) as number
  }

  set castTime(value: number) {
    this.setLevelField(ABILITY_RLF_CASTING_TIME, value)
  }

  get castRange(): number {
    return this.getLevelField(ABILITY_RLF_CAST_RANGE) as number
  }

  get castTimeAllLevels(): number[] {
    return this.getLevelFieldArray(ABILITY_RLF_CASTING_TIME) as number[]
  }

  set castTimeAllLevels(value: number[]) {
    this.setLevelFieldArray(ABILITY_RLF_CASTING_TIME, value)
  }

  hide() {
    BlzUnitHideAbility(this.unit.handle, this.abilityType.id, true)
  }

  show() {
    BlzUnitHideAbility(this.unit.handle, this.abilityType.id, false)
  }

  enable(hideUI: boolean = false) {
    BlzUnitDisableAbility(this.unit.handle, this.abilityType.id, false, hideUI)
  }

  disable(hideUI: boolean = true) {
    BlzUnitDisableAbility(this.unit.handle, this.abilityType.id, true, hideUI)
  }

  /**
   * Runs an function through all of the levels of a abilitylevelfield item
   * @param field
   * @param expression this will be run on every level of the abilitylevelfield item
   */
  forEachLevelField(
    field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield,
    expression: (value: string | number | boolean) => string | number | boolean
  ): void {
    for (let i = 0; i < this.levels; i++) {
      this.setLevelField(field, expression(this.getLevelField(field, i)), i)
    }
  }

  setLevelFieldArray(
    field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield,
    value: string[] | number[] | boolean[]
  ): void {
    for (let i = 0; i < this.levels; i++) {
      this.setLevelField(field, value[i])
    }
  }

  /**
   * Returns all levels of an abilitylevelfield as an array
   * @param field
   * @returns an array of items from the abilitylevelfield for all levels
   */
  getLevelFieldArray(field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield): (string | number | boolean)[] {
    const fields = []

    for (let i = 0; i < this.levels; i++) {
      fields.push(this.getLevelField(field, i))
    }

    return fields
  }

  setField(field: abilitybooleanfield | abilitystringfield | abilityrealfield | abilityintegerfield, value: boolean | number | string): boolean {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

    if (fieldType === "abilitybooleanfield" && typeof value === "boolean") {
      return BlzSetAbilityBooleanField(this.handle, field as abilitybooleanfield, value)
    } else if (fieldType === "abilityintegerfield" && typeof value === "number") {
      return BlzSetAbilityIntegerField(this.handle, field as abilityintegerfield, value)
    } else if (fieldType === "abilityrealfield" && typeof value === "number") {
      return BlzSetAbilityRealField(this.handle, field as abilityrealfield, value)
    } else if (fieldType === "abilitystringfield" && typeof value === "string") {
      return BlzSetAbilityStringField(this.handle, field as abilitystringfield, value)
    }

    return false
  }

  setLevelField(
    field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield,
    value: boolean | number | string,
    level: number = this.level - 1
  ): boolean {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

    if (fieldType === "abilitybooleanlevelfield" && typeof value === "boolean") {
      return BlzSetAbilityBooleanLevelField(this.handle, field as abilitybooleanlevelfield, level, value)
    } else if (fieldType === "abilityintegerlevelfield" && typeof value === "number") {
      return BlzSetAbilityIntegerLevelField(this.handle, field as abilityintegerlevelfield, level, value)
    } else if (fieldType === "abilityreallevelfield" && typeof value === "number") {
      return BlzSetAbilityRealLevelField(this.handle, field as abilityreallevelfield, level, value)
    } else if (fieldType === "abilitystringlevelfield" && typeof value === "string") {
      return BlzSetAbilityStringLevelField(this.handle, field as abilitystringlevelfield, level, value)
    }

    return false
  }

  getField(field: abilitybooleanfield | abilitystringfield | abilityrealfield | abilityintegerfield): boolean | number | string {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

    switch (fieldType) {
      case "abilitybooleanfield": {
        const fieldBool = field as abilitybooleanfield

        return BlzGetAbilityBooleanField(this.handle, fieldBool) as boolean
      }
      case "abilityintegerfield": {
        const fieldInt = field as abilityintegerfield

        return BlzGetAbilityIntegerField(this.handle, fieldInt) as number
      }
      case "abilityrealfield": {
        const fieldReal = field as abilityrealfield

        return BlzGetAbilityRealField(this.handle, fieldReal) as number
      }
      case "abilitystringfield": {
        const fieldString = field as abilitystringfield

        return BlzGetAbilityStringField(this.handle, fieldString) as string
      }
      default:
        return 0
    }
  }

  getLevelField(
    field: abilitybooleanlevelfield | abilitystringlevelfield | abilityreallevelfield | abilityintegerlevelfield,
    level: number = this.level - 1
  ): boolean | number | string {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

    switch (fieldType) {
      case "abilitybooleanlevelfield": {
        const fieldBool = field as abilitybooleanlevelfield

        return BlzGetAbilityBooleanLevelField(this.handle, fieldBool, level) as boolean
      }
      case "abilityintegerlevelfield": {
        const fieldInt = field as abilityintegerlevelfield

        return BlzGetAbilityIntegerLevelField(this.handle, fieldInt, level) as number
      }
      case "abilityreallevelfield": {
        const fieldReal = field as abilityreallevelfield

        return BlzGetAbilityRealLevelField(this.handle, fieldReal, level) as number
      }
      case "abilitystringlevelfield": {
        const fieldString = field as abilitystringlevelfield

        return BlzGetAbilityStringLevelField(this.handle, fieldString, level) as string
      }
      default:
        return 0
    }
  }

  updateTooltip() {
    //
  }

  updateExtendedTooltip() {
    //
  }

  updateTooltips() {
    this.updateTooltip()
    this.updateExtendedTooltip()
  }

  static fromSpell(cast: IAbilityCast) {
    return this.fromHandle({ unit: cast.CastingUnit(), abilType: cast.AbilType() })
  }

  static override fromHandle(ability: IUnitAbilityParam) {
    return this.getObject(ability) as UnitAbility
  }
}
