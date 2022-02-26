/** @format */

import { HeroAbility } from "lib/classes/heroAbility/HeroAbility"
import { IHeroAbilitiesDepend } from "./interfaces/IHeroAbilitiesDepend"

export class HeroAbilities {
  // Static
  protected static instance?: HeroAbilities

  static getInstance(depend: IHeroAbilitiesDepend) {
    if (!HeroAbilities.instance) HeroAbilities.instance = new HeroAbilities(depend)
    return HeroAbilities.instance
  }

  // Instance

  private constructor(depend: IHeroAbilitiesDepend) {
    // Dependencies
    const abilTypes = depend.abilityTypes
    const abilCast = depend.abilityCast
  }
}
