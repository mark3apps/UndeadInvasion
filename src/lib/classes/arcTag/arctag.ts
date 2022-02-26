/** @format */

import { TextTag } from "w3ts/index"
import { IArcTag } from "./IArcTag"
import { IArcTagDepend } from "./IArcTagDepend"

export class ArcTag {
  tag: TextTag
  angleSin: number // angle, sin component
  angleCos: number // angle, cos component
  arcHeight: number // arc height
  time: number // time
  x: number // origin x
  y: number // origin y
  text: string // text
  angle: number // angle

  constructor(depend: IArcTagDepend, arcTag: IArcTag) {
    const arcTagEngine = depend.arcTagEngine

    this.tag = new TextTag()
    this.x = arcTag.unit.x
    this.y = arcTag.unit.y
    this.text = arcTag.text

    this.angle = math.random(0, 2 * math.pi)

    this.time = arcTagEngine.timeLife
    this.angleSin = Sin(this.angle) * arcTagEngine.velocity
    this.angleCos = Cos(this.angle) * arcTagEngine.velocity
    this.arcHeight = 0

    this.tag.setPermanent(false)
    this.tag.setLifespan(arcTagEngine.timeLife)
    this.tag.setFadepoint(arcTagEngine.timeFade)
    this.tag.setText(this.text, arcTagEngine.sizeMin)
    this.tag.setPos(this.x, this.y, arcTagEngine.zOffset)
    if (arcTag.color) this.tag.setColor(arcTag.color.red, arcTag.color.green, arcTag.color.blue, arcTag.color.alpha)

    arcTagEngine.current.push(this)

    if (arcTagEngine.current.length === 1) {
      arcTagEngine.updateTimer.start(arcTagEngine.tick, true, () => {
        arcTagEngine.update()
      })
    }
  }
}
