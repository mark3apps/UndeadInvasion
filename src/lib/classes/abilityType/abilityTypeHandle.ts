import { CC2Four } from 'lib/resources/library'
import { TargetType } from "./enums/TargetType"
import { EffectType } from "./enums/EffectType"
import { IAbilityTypeParam } from "./interfaces/iAbilityTypeParam"

const AbilityTypeMap = new Map<number, unknown>()
const preload: unknown[] = []

export class AbilityTypeHandle {
	readonly four: string
	readonly effectType
	readonly targetType

	readonly buffFour
	readonly orderId
	readonly orderIdAutoOn
	readonly orderIdAutoOff
	readonly orderIdOff

	static initAbilityType?: IAbilityTypeParam

	constructor (abilityType?: IAbilityTypeParam) {
		let abilityTypeDefined: IAbilityTypeParam
		if (abilityType) {
			abilityTypeDefined = abilityType
		} else {
			abilityTypeDefined = AbilityTypeHandle.initAbilityType as IAbilityTypeParam
		}

		this.four = abilityTypeDefined.four
		this.effectType = abilityTypeDefined.effectType ?? EffectType.None
		this.targetType = abilityTypeDefined.targetType ?? TargetType.None

		this.buffFour = abilityTypeDefined.buffFour ?? ""
		this.orderId = abilityTypeDefined.orderId ?? 0
		this.orderIdAutoOff = abilityTypeDefined.orderIdAutoOff ?? 0
		this.orderIdAutoOn = abilityTypeDefined.orderIdAutoOn ?? 0
		this.orderIdOff = abilityTypeDefined.orderIdOff ?? 0
	}

	protected static initFromAbilityType () {
		return AbilityTypeHandle.initAbilityType !== undefined
	}

	protected static getObject (abilityId: number) {
		const obj = AbilityTypeMap.get(abilityId) as unknown

		if (obj !== undefined) {
			return obj
		}

		AbilityTypeHandle.initAbilityType = { four: CC2Four(abilityId) }
		const newObj = new this()
		AbilityTypeHandle.initAbilityType = undefined
		return newObj
	}
}
