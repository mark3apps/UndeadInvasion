/** @format */

export class Forces {
  protected static instance: Forces

  static getInstance() {
    if (!Forces.instance) Forces.instance = new Forces()
    return Forces.instance
  }

  constructor() {}
}
