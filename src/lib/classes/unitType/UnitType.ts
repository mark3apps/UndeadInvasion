/* eslint-disable no-use-before-define */
import { IUnitTypeParam } from './interfaces/IUnitTypeParam'

export class UnitType {
	static preloader: UnitType[] = []
	static readonly map: Map<number, unknown> = new Map()
	static order: Map<number, boolean> = new Map()
	static replaceOnSummon: Map<number, boolean> = new Map()
	static factorySummon: Map<number, boolean> = new Map()
	static leaveCorpse: Map<number, boolean> = new Map()

	static get (unitId: number) {
		const unitType = this.map.get(unitId)
		return unitType ? (unitType as UnitType) : undefined
	}

	public readonly four: string
	public readonly id: number
	public order: boolean = true
	public replaceOnSummon: boolean = false
	public factorySummon: boolean = false
	public leaveCorpse: boolean = false
	public preload: boolean = false

	constructor (config: IUnitTypeParam) {
		this.four = config.four
		this.id = FourCC(config.four)

		// Default Booleans
		if (config.order !== undefined) this.order = config.order
		if (config.replaceOnSummon !== undefined) this.replaceOnSummon = config.replaceOnSummon
		if (config.factorySummon !== undefined) this.factorySummon = config.factorySummon
		if (config.leaveCorpse !== undefined) this.leaveCorpse = config.leaveCorpse
		if (config.preload !== undefined) this.preload = config.preload

		UnitType.map.set(this.id, this)
		if (this.order === true) { UnitType.order.set(this.id, true) }
		if (this.replaceOnSummon === true) { UnitType.replaceOnSummon.set(this.id, true) }
		if (this.factorySummon === true) { UnitType.factorySummon.set(this.id, true) }
		if (this.leaveCorpse === true) { UnitType.leaveCorpse.set(this.id, true) }
		if (this.preload === true) { UnitType.preloader.push(this) }
	}
}
