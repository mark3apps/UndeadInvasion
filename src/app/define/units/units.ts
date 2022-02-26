/** @format */

import { Unit } from "w3ts/index"

export class Units {
  private static instance?: Units

  static getInstance() {
    if (!Units.instance) Units.instance = new Units()
    return Units.instance
  }

  constructor() {}
}
