/** @format */

import { Order } from "w3ts/index"

export class ItemType {
  four: string
  id: number
  abilityFour: string | undefined
  abilityId: number | undefined
  orderFour: string | undefined
  orderId: Order | undefined
  instant: boolean
  castTime: number[]

  static readonly map: Map<number, ItemType> = new Map()

  constructor(four: string, abilityFour?: string, orderFour?: string, instant = true, castTime: number[] = []) {
    this.four = four
    this.id = FourCC(four)
    this.abilityFour = abilityFour

    if (abilityFour) {
      this.abilityId = FourCC(abilityFour)
    } else {
      this.abilityId = undefined
    }

    this.orderFour = orderFour

    if (orderFour) {
      this.orderId = FourCC(orderFour)
    } else {
      this.orderFour = undefined
    }

    this.instant = instant
    this.castTime = castTime

    ItemType.map.set(this.id, this)
  }

  public static get(id: number | string): ItemType | undefined {
    return typeof id === "number" ? ItemType.map.get(id) : ItemType.map.get(FourCC(id))
  }
}
