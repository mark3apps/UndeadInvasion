/** @format */

import { Timer } from "w3ts/index"
import { ArcTag } from "./arctag"

export class ArcTagEngine {
  protected static instance?: ArcTagEngine

  static getInstance() {
    if (!ArcTagEngine.instance) ArcTagEngine.instance = new ArcTagEngine()
    return ArcTagEngine.instance
  }

  current: ArcTag[] = []
  next: ArcTag[] = []

  tick = 0.03
  sizeMin = 0.011
  sizeBonus = 0.009 // Text size increase
  timeLife = 0.6 // How long the text lasts
  timeFade = 0.4 // When does the text start to fade
  zOffset = 40 // Height above unit
  zOffsetBonus = 50 // How much extra height the text gains
  velocity = 3 // How fast the text move in x/y plane
  angle = math.pi / 2 // Movement angle of the text. Does not apply if
  angleRandom = true // Is the angle random or fixed
  updateTimer = new Timer()

  private constructor() {}

  update = () => {
    let currentTag = this.current.pop()
    while (currentTag) {
      const p = Sin(math.pi * currentTag.time)
      currentTag.time -= this.tick
      currentTag.x += currentTag.angleCos
      currentTag.y += currentTag.angleSin

      currentTag.tag.setPos(currentTag.x, currentTag.y, this.zOffset + this.zOffsetBonus * p)
      currentTag.tag.setText(currentTag.text, this.sizeMin + this.sizeBonus * p)

      if (currentTag.time > 0) {
        this.next.push(currentTag)
      }

      currentTag = this.current.pop()
    }

    this.current = this.next
    this.next = []

    if (this.current.length === 0) {
      this.updateTimer.pause()
    }
  }
}
