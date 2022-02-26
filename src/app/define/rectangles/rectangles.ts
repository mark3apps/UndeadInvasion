/** @format */

import { Rectangle } from "w3ts/index"

export class Rectangles {
  protected static instance: Rectangles

  static getInstance() {
    if (!Rectangles.instance) Rectangles.instance = new Rectangles()
    return Rectangles.instance
  }

  /// / AUTO DEFINE

  constructor() {}
}
