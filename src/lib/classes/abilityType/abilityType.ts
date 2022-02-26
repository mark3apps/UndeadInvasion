import { AbilityTypeHandle } from './abilityTypeHandle'
import { IAbilityTypeParam } from './interfaces/iAbilityTypeParam'

export class AbilityType extends AbilityTypeHandle {
	constructor (ability: IAbilityTypeParam) {
		if (AbilityTypeHandle.initFromAbilityType()) {
			super()
		} else {
			super(ability)
		}
	}

	public get id (): number {
		return FourCC(this.four)
	}

	public get buffId (): number | undefined {
		return this.buffFour ? FourCC(this.buffFour) : undefined
	}

	public get icon (): string {
		return BlzGetAbilityIcon(this.id)
	}

	public get iconActivated (): string {
		return BlzGetAbilityActivatedIcon(this.id)
	}

	public get name (): string {
		return GetAbilityName(this.id)
	}

	public get activatedPosX (): number {
		return BlzGetAbilityActivatedPosX(this.id)
	}

	public get activatedPosY (): number {
		return BlzGetAbilityActivatedPosY(this.id)
	}

	public get posX (): number {
		return BlzGetAbilityPosX(this.id)
	}

	public get posY (): number {
		return BlzGetAbilityPosY(this.id)
	}

	public defaultManaCost (level: number): number {
		return BlzGetAbilityManaCost(this.id, level)
	}

	public getCooldown (level: number): number {
		return BlzGetAbilityCooldown(this.id, level)
	}

	public getEffect (t: effecttype, index: number): string {
		return GetAbilityEffectById(this.id, t, index)
	}

	public getSound (t: soundtype): string {
		return GetAbilitySoundById(this.id, t)
	}

	public getActivatedTooltip (level: number): string {
		return BlzGetAbilityActivatedTooltip(this.id, level)
	}

	public setActivatedTooltip (level: number, value: string): void {
		BlzSetAbilityActivatedTooltip(this.id, value, level)
	}

	public getExtendedTooltip (level: number): string {
		return BlzGetAbilityExtendedTooltip(this.id, level)
	}

	public setExtendedTooltip (level: number, value: string): void {
		BlzSetAbilityExtendedTooltip(this.id, value, level)
	}

	public getTooltip (level: number): string {
		return BlzGetAbilityTooltip(this.id, level)
	}

	public setTooltip (level: number, value: string): void {
		BlzSetAbilityTooltip(this.id, value, level)
	}

	public getResearchTooltip (level: number): string {
		return BlzGetAbilityResearchTooltip(this.id, level)
	}

	public setResearchTooltip (level: number, value: string): void {
		BlzSetAbilityResearchTooltip(this.id, value, level)
	}

	public getResearchExtendedTooltip (level: number): string {
		return BlzGetAbilityResearchExtendedTooltip(this.id, level)
	}

	public setResearchExtendedTooltip (level: number, value: string): void {
		BlzSetAbilityResearchExtendedTooltip(this.id, value, level)
	}

	public getActivatedExtendedTooltip (level: number): string {
		return BlzGetAbilityActivatedExtendedTooltip(this.id, level)
	}

	public setActivatedExtendedTooltip (level: number, value: string): void {
		BlzSetAbilityActivatedExtendedTooltip(this.id, value, level)
	}

	static fromSpellEvent () {
		return this.getObject(GetSpellAbilityId()) as AbilityType
	}
}
