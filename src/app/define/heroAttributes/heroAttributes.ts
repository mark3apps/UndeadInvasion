/** @format */

import { IHeroAttributes } from "lib/classes/heroAttribute/IHeroAttributes"

export class HeroAttributes {
  protected static instance: HeroAttributes

  static getInstance(depend: IHeroAttributes) {
    if (!HeroAttributes.instance) HeroAttributes.instance = new HeroAttributes(depend)
    return HeroAttributes.instance
  }

  constructor(depend: IHeroAttributes) {
    const itemTypes = depend.itemTypes
  }
}
