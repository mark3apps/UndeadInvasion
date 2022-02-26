import { Ability } from '../ability/Ability'
import { iHeroAbility } from './interfaces/iHeroAbility'
import { IHeroAbilityDepend } from './interfaces/IHeroAbilityDepend'

export class HeroAbility extends Ability {
	starting: boolean
	ult: boolean
	hidden: boolean

	constructor (depend: IHeroAbilityDepend, heroAbility: iHeroAbility) {
		super(depend, heroAbility)

		this.starting = heroAbility.starting ?? false
		this.ult = heroAbility.ult ?? false
		this.hidden = heroAbility.hidden ?? false
	}
}
