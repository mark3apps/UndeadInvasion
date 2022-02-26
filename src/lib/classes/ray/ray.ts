/** @format */

import { Unit, Timer, MapPlayer } from "w3ts/index"
import { Position } from "../position/position"
import { Vector } from "../vector/Vector"

export class Ray extends Vector {
  protected _origin: Position | Unit
  protected _dest: Position | Unit
  protected _tickTimer: Timer
  protected _rayUnit: Unit | undefined
  protected _arcMaxHeight = 0
  protected _curve = 0
  protected _hasRayUnit = false

  protected _onHit = (ray: Ray) => {}

  damage = 0
  areaOfEffect = 0
  collision = 32
  owner: MapPlayer | undefined
  velocity: number
  acceleration = 0
  ticks = 0
  turnSpeed = 1
  destroyAtEnd = true

  // Static Values
  static pitchMax = 600
  static curveMax = 800
  static increment = 0.02
  protected static timeDialation = 1

  /**
   *
   * @param origin
   * @param travelDistance
   * @param yaw
   * @param initialVelocity
   * @param modelPath
   * @param increment
   */
  constructor(origin: Position | Unit, travelDistance: number, yaw: number, initialVelocity: number, modelPath?: string)
  /**
   *
   * @param origin If set to a Unit, the ray's start position will be locked to the Unit
   * @param dest If set to a unit, the ray's end position will be locked to the Unit. AKA Homing.
   * @param initialVelocity Speed that the ray moves each tick
   * @param modelPath Model path for a special effect to show at the ray's location
   * @param increment how often the ray ticks forward.  Default is 0.02 seconds
   * @param blank INGORE
   */
  constructor(origin: Position | Unit, dest: Position | Unit, initialVelocity: number, modelPath?: string, blank?: string)
  constructor(origin: Position | Unit, a: number | Position | Unit, b: number, c?: number | string, d?: string) {
    super({ x: origin.x, y: origin.y, z: origin.z })
    this._origin = origin

    if (typeof a === "number") {
      const distance = a
      this._yaw = b
      this.velocity = c as number
      this.effectPath = d

      this._dest = new Position(this._origin.polarProjection(distance, this.yaw))
    } else {
      this._dest = a
      this.velocity = b
      this.effectPath = c as string
      this.yaw = this.origin.yawTo(this.dest)
    }

    this._tickTimer = new Timer()
  }

  public startForward(): void {
    this._tickTimer.start(Ray.increment, true, () => {
      this.tick(1)
    })
  }

  public startBackward(): void {
    this._tickTimer.start(Ray.increment, true, () => {
      this.tick(-1)
    })
  }

  public pause(): void {
    this._tickTimer.pause()
  }

  public tick(newTicks = 1): void {
    // Update the Angle with the new tragectery
    this.yaw = this.yawToDest

    // Push the Ray forward
    this.x += this.velocity * Cos(this.yaw * bj_DEGTORAD) * newTicks
    this.y += this.velocity * Sin(this.yaw * bj_DEGTORAD) * newTicks
    this.z += this.velocity * Tan(this.yaw * bj_DEGTORAD) * newTicks
    this.ticks += newTicks
    // this.updateEffect()
    this.updateRayUnit()
  }

  public override set x(value: number) {
    this._x = value
    if (this.effect) {
      this.effect.x = value
    }
    if (this._rayUnit) {
      this._rayUnit.x = value
    }
  }

  public override set y(value: number) {
    this._y = value
    if (this.effect) {
      this.effect.y = value
    }
    if (this._rayUnit) {
      this._rayUnit.y = value
    }
  }

  public override set z(value: number) {
    this._z = value
    if (this.effect) {
      this.effect.z = value
    }
    if (this._rayUnit) {
      this._rayUnit.z = value
    }
  }

  public get arcMaxHeight(): number {
    return this._arcMaxHeight
  }

  public set arcMaxHeight(value: number) {
    this._arcMaxHeight = value
  }

  public get curve(): number {
    return this._curve
  }

  public set curve(value: number) {
    this._curve = value
  }

  public get arc(): number {
    return this.getArc(this.distanceToOrigin, this.distanceOriginToDest, this.arcMaxHeight)
  }

  public hasUnit(): boolean {
    return this._hasRayUnit
  }

  public set rayUnit(unit: Unit) {
    this._rayUnit = unit
    this._hasRayUnit = true
    this._rayUnit.coordinate = this
    if (this._rayUnit) this._rayUnit.facing = this.yaw
  }

  public override get yaw(): number {
    return this._yaw
  }

  /**
   * Only allows the angle to be changed by the max yaw set in the turn rate field each call.
   * Specified in Degrees
   */
  public override set yaw(newYaw: number) {
    const yawChange = newYaw - this._yaw

    if (math.abs(yawChange) > this.turnSpeed) {
      yawChange < 0 ? (this._yaw -= this.turnSpeed) : (this._yaw += this.turnSpeed)
    } else {
      this._yaw += yawChange
    }

    if (this.effect) {
      this.effect.yaw = this.yaw
    }
    if (this._rayUnit) {
      this._rayUnit.facing = this.yaw
    }
  }

  public override set pitch(newPitch: number) {
    const pitchChange = newPitch - this.yaw

    if (math.abs(pitchChange) > this.turnSpeed) {
      pitchChange < 0 ? (this._pitch -= this.turnSpeed) : (this._pitch += this.turnSpeed)
    } else {
      this._pitch += pitchChange
    }

    if (this.effect) {
      this.effect.pitch = this.pitch
    }
  }

  public override set roll(newRoll: number) {
    const rollChange = newRoll - this.yaw

    if (math.abs(rollChange) > this.turnSpeed) {
      rollChange < 0 ? (this._roll -= this.turnSpeed) : (this._roll += this.turnSpeed)
    } else {
      this._roll += rollChange
    }

    if (this.effect) {
      this.effect.roll = this.roll
    }
  }

  public get pitchToOrigin(): number {
    return this.pitchTo(this.origin)
  }

  public get pitchToDest(): number {
    return this.pitchTo(this.dest)
  }

  public get yawToDest(): number {
    return this.yawTo(this.dest)
  }

  public get yawToOrigin(): number {
    return this.yawTo(this.origin)
  }

  public get yawOriginToDest(): number {
    return this.origin.yawTo(this.dest)
  }

  public get distanceToOrigin(): number {
    return this.distanceTo(this.origin)
  }

  public set distanceToOrigin(value: number) {
    const newDistance = this.distanceToOrigin - value
    this.moveToPolarProjection(newDistance, this.yawToOrigin)
  }

  public get distanceToDest(): number {
    return this.distanceTo(this.dest)
  }

  public set distanceToDest(value: number) {
    const newDistance = this.distanceToDest - value
    this.moveToPolarProjection(newDistance, this.yawToDest)
  }

  public get dest(): Position {
    return this._dest instanceof Unit ? new Position(this._dest.coordinate) : this._dest
  }

  public set dest(pos: Unit | Position) {
    this._dest = pos
  }

  public get origin(): Position {
    return this._origin instanceof Unit ? new Position(this._origin.coordinate) : this._origin
  }

  public set origin(pos: Position) {
    this._origin = pos
  }

  public get distanceOriginToDest(): number {
    return this._origin.distanceTo(this._dest)
  }

  public set distanceOriginToDest(value: number) {
    this.origin.distanceTo(this.dest)
  }

  public updateRayUnit(): void {
    if (this.rayUnit != null) {
      this.rayUnit.coordinate = this
    }
  }

  public destroyEffect(): void {
    if (this.effect) this.effect.destroy()
  }
}
