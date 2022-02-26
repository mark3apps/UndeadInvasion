/** @format */

import { ItemType } from "lib/classes/itemType/itemType"

export class ItemTypes {
  protected static instance: ItemTypes

  static getInstance() {
    if (!ItemTypes.instance) ItemTypes.instance = new ItemTypes()
    return ItemTypes.instance
  }

  constructor() {}
}
