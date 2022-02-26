/**
 * /* eslint-disable camelcase
 *
 * @format
 */

import { Coordinate } from "lib/interfaces/Coordinate"
import { Orientation } from "./interfaces/Orientation"

export class Position implements Coordinate {
  protected _x: number
  protected _y: number
  protected _z: number

  private static itemType = FourCC("I00M")
  constructor(coordinate: Coordinate)
  constructor(x: number, y: number, z?: number)
  constructor(a: number | Coordinate, b?: number, c?: number) {
    if (typeof a === "number") {
      this._x = a
      this._y = b ?? 0
      this._z = c ?? 0
    } else {
      this._x = a.x
      this._y = a.y
      this._z = a.z ?? 0
    }
  }

  static fromSpellTarget(): Position {
    return new Position(GetSpellTargetX(), GetSpellTargetY())
  }

  static fromOrder(): Position {
    return new Position(GetOrderPointX(), GetOrderPointY())
  }

  static fromCameraEye(): Position {
    return new Position(GetCameraEyePositionX(), GetCameraEyePositionY(), GetCameraEyePositionZ())
  }

  static fromCameraTarget(): Position {
    return new Position(GetCameraTargetPositionX(), GetCameraTargetPositionY(), GetCameraTargetPositionZ())
  }

  static fromCoordinate(coor: Coordinate) {
    return new Position(coor)
  }

  public get x(): number {
    return this._x
  }

  public set x(value: number) {
    this._x = value
  }

  public get y(): number {
    return this._y
  }

  public set y(value: number) {
    this._y = value
  }

  public get z(): number {
    return this._z
  }

  public set z(value: number) {
    this._z = value
  }

  public isBlighted(): boolean {
    return IsPointBlighted(this.x, this.y)
  }

  /**
   *
   * @param pathingType Default is WALKABILITY
   * @returns
   */
  public isTerrianPathable(pathingType = PATHING_TYPE_WALKABILITY) {
    return !IsTerrainPathable(this.x, this.y, pathingType)
  }

  public distanceTo(value: Coordinate) {
    return SquareRoot((value.x - this.x) * (value.x - this.x) + (value.y - this.y) * (value.y - this.y))
  }

  public yawTo(value: Coordinate) {
    return bj_RADTODEG * Atan2(value.y - this.y, value.x - this.x)
  }

  public pitchTo(value: Coordinate) {
    return bj_RADTODEG * Atan2(this.z - (value.z ?? 0), 0 - this.distanceTo(value))
  }

  public orientationTo(coor: Coordinate): Orientation {
    const yaw = this.yawTo(coor)
    const pitch = this.pitchTo(coor)

    return { yaw: yaw, pitch: pitch }
  }

  public polarProjection(dist: number, angle: number): Coordinate {
    return { x: this.x + dist * Cos(angle * bj_DEGTORAD), y: this.y + dist * Sin(angle * bj_DEGTORAD) }
  }

  public moveToPolarProjection(dist: number, angle: number) {
    this.x = this.x + dist * Cos(angle * bj_DEGTORAD)
    this.y = this.y + dist * Sin(angle * bj_DEGTORAD)
  }

  public getArc(distanceTraveled: number, fullDistance: number, maximumHeight: number): number {
    return (4 * maximumHeight * distanceTraveled * (fullDistance - distanceTraveled)) / (fullDistance * fullDistance)
  }

  public pingMinimap(duration: number, extraEffects = false, red = 0, green = 0, blue = 0): void {
    PingMinimapEx(this.x, this.y, duration, red, green, blue, extraEffects)
  }

  public moveTo(pos: Coordinate): void {
    this.x = pos.x
    this.y = pos.y
    if (pos.z) {
      this.z = pos.z
    }
  }

  /**
   *
   * @param threshold default = 100
   * @param pathingType default = WALKABILITY
   * @returns
   */
  public isGroundPathable(threshold = 100, pathingType = PATHING_TYPE_WALKABILITY) {
    const item = CreateItem(Position.itemType, this.x, this.y)
    const x = GetItemX(item)
    const y = GetItemY(item)
    RemoveItem(item)

    const variance = (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)

    return variance <= threshold && !this.isTerrianPathable(pathingType)
  }

  // Async command, use with caution, creates and destroys a Point Handle, not amazingly fast
  public get localZ() {
    const point = Location(this.x, this.y)
    const z = GetLocationZ(point)
    RemoveLocation(point)

    return z
  }
}
