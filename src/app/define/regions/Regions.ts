/** @format */

import { Region } from "w3ts/index"
import { IRegionDepend } from "./IRegionsDepend"

export class Regions {
  protected static instance: Regions

  static getInstance(depend: IRegionDepend) {
    if (!Regions.instance) Regions.instance = new Regions(depend)
    return Regions.instance
  }

  BigTop: Region
  BigMiddle: Region
  BigBottom: Region

  constructor(depend: IRegionDepend) {
    const rectangles = depend.rects

    this.BigTop = new Region()
    this.BigMiddle = new Region()
    this.BigBottom = new Region()
  }
}
