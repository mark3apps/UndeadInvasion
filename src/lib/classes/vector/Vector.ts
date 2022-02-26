/** @format */

import { Effect } from "w3ts/index"
import { Orientation } from "../position/interfaces/Orientation"
import { Position } from "../position/position"
import { IVector } from "./interfaces/IVector"

export class Vector extends Position {
  // Hidden Variables with Getter/Setter
  protected _yaw = 0
  protected _pitch = 0
  protected _roll = 0
  protected _effectPath: string | undefined

  effect: Effect | null = null

  constructor(line: IVector, effectPath?: string) {
    super(line.x, line.y, line.z)
    if (line.yaw) this.yaw = line.yaw
    if (line.pitch) this.pitch = line.pitch
    if (line.roll) this.roll = line.roll
    this._effectPath = effectPath as string

    if (this._effectPath !== undefined) {
      this.effect = new Effect(this._effectPath, this, this.orientation)
    }
  }

  public override set x(value: number) {
    this._x = value
    if (this.effect) this.effect.x = value
  }

  public override set y(value: number) {
    this._y = value
    if (this.effect) this.effect.y = value
  }

  public override set z(value: number) {
    this._z = value
    if (this.effect) this.effect.z = value
  }

  public set yaw(value: number) {
    this._yaw = value
    if (this.effect) {
      this.effect.yaw = value
    }
  }

  public get yaw(): number {
    return this._yaw
  }

  public set pitch(value: number) {
    this._pitch = value
    if (this.effect) {
      this.effect.pitch = value
    }
  }

  public get pitch(): number {
    return this._pitch
  }

  public set roll(value: number) {
    this._roll = value
    if (this.effect) {
      this.effect.roll = value
    }
  }

  public get roll(): number {
    return this._roll as number
  }

  public get orientation(): Orientation {
    return { yaw: this.yaw, pitch: this.pitch, roll: this.roll }
  }

  public set orientation(orientation: Orientation) {
    this.yaw = orientation.yaw ?? this.yaw
    this.pitch = orientation.pitch ?? this.pitch
    this.roll = orientation.roll ?? this.roll
    if (this.effect) {
      this.effect.orientation = this.orientation
    }
  }

  public get line(): IVector {
    return { x: this.x, y: this.y, z: this.z, yaw: this.yaw, pitch: this.pitch, roll: this.roll }
  }

  public set effectPath(path: string | undefined) {
    // Check to see if the model path is different
    if (this.effectPath !== path) {
      // Destroy the Existing Effect
      if (this.effect) this.effect.destroy()

      // Create the new Effect
      this._effectPath = path
      if (this._effectPath) {
        this.effect = new Effect(this._effectPath, this, {})
        this.effect.z = this.z
      }
    }
  }

  public get effectPath(): string | undefined {
    return this._effectPath
  }

  public orientTo(pos: Position): void {
    this.orientation = this.orientationTo(pos)
  }

  public project(dist: number): Position {
    const x = this.x + dist * Cos(this.yaw * bj_DEGTORAD)
    const y = this.y + dist * Sin(this.yaw * bj_DEGTORAD)
    const z = this.z + dist * Tan(this.pitch * bj_DEGTORAD)
    return new Vector({ x: x, y: y, z: z, yaw: this.yaw, pitch: this.pitch, roll: this.roll })
  }

  public moveToProjection(dist: number): void {
    this.x = this.x + dist * Cos(this.yaw * bj_DEGTORAD)
    this.y = this.y + dist * Sin(this.yaw * bj_DEGTORAD)
    this.z = this.z + dist * Tan(this.pitch * bj_DEGTORAD)
  }

  public get effectScale(): number {
    return this.effect ? this.effect.scale : 0
  }

  public set effectScale(value: number) {
    if (this.effect) this.effect.scale = value
  }
}

// const pos = new Vector(3, 45)
// const pos2 = new Vector(35, 2345, 0, 343)

// pos2.orientTo(pos)
