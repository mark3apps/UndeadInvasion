/** @noSelfInFile **/

import { Position } from 'app/classes/position'
import { Color } from '../index'
import { Handle } from './handle'
import { MapPlayer } from './player'
import { Point } from './point'
import { IVector } from "../../../app/classes/IVector"
import { Orientation } from "../../../app/classes/Orientation"
import { Coordinate } from "../../../app/classes/Coordinate"
import { Widget } from './widget'

export class Effect extends Handle<effect> {
	/**
	 * Creates a special effect at position
	 * @param modelName
	 * @param pos
	 */
	constructor (modelName: string, pos: Coordinate, orientation?: Orientation)
	/**
	 * Creates a special effect.
	 * @param modelName The path of the model that the effect will use.
	 * @param x
	 * @param y
	 */
	constructor (modelName: string, x: number, y: number)
	/**
	 * Creates a special effect attached to a widget.
	 * @param modelName The path of the model that the effect will use.
	 * @param targetWidget The widget to attach the effect to.
	 * @param attachPointName The attachment point of the widget where the effect will
	 * be placed. Attachment points are points in a model that can be referenced to as
	 * areas for effects to be attached, whether it be from a spell or this function.
	 * If the attachment point does not exist, it will attach the effect to the model's origin.
	 */
	constructor (modelName: string, targetWidget: Widget, attachPointName: string)
	constructor (modelName: string, a: number | Widget | Coordinate, b?: number | string | Orientation) {
		if (Handle.initFromHandle()) {
			super()
		} else if (typeof a === 'number' && typeof b === 'number') {
			super(AddSpecialEffect(modelName, a, b))
		} else if (a instanceof Widget) {
			b = b as string
			super(AddSpecialEffectTarget(modelName, a.handle, b))
		} else {
			a = a as Coordinate
			super(AddSpecialEffect(modelName, a.x, a.y))
			if (a.z) { BlzSetSpecialEffectZ(this.handle, a.z) }
			if (b) {
				const orientation = b as Orientation
				BlzSetSpecialEffectOrientation(this.handle, orientation.yaw ?? 0, orientation.pitch ?? 0, orientation.roll ?? 0)
			}
		}
	}

	public get scale (): number {
		return BlzGetSpecialEffectScale(this.handle)
	}

	public set scale (scale: number) {
		BlzSetSpecialEffectScale(this.handle, scale)
	}

	/**
	 * Warning: asynchronous
	 */
	public get x (): number {
		return BlzGetLocalSpecialEffectX(this.handle)
	}

	public set x (x: number) {
		BlzSetSpecialEffectX(this.handle, x)
	}

	/**
	 * Warning: asynchronous
	 */
	public get y (): number {
		return BlzGetLocalSpecialEffectY(this.handle)
	}

	public set y (y: number) {
		BlzSetSpecialEffectY(this.handle, y)
	}

	/**
	 * Warning: asynchronous
	 */
	public get z (): number {
		return BlzGetLocalSpecialEffectZ(this.handle)
	}

	public set z (z: number) {
		BlzSetSpecialEffectZ(this.handle, z)
	}

	// eslint-disable-next-line accessor-pairs
	public set position (pos: Position | Coordinate) {
		BlzSetSpecialEffectX(this.handle, pos.x)
		BlzSetSpecialEffectY(this.handle, pos.y)
		if (pos.z != null) { BlzSetSpecialEffectZ(this.handle, pos.x) }
	}

	// eslint-disable-next-line accessor-pairs
	public set color (color: Color) {
		BlzSetSpecialEffectColor(this.handle, color.red, color.green, color.blue)
		BlzSetSpecialEffectAlpha(this.handle, color.alpha)
	}

	public addSubAnimation (subAnim: subanimtype): void {
		BlzSpecialEffectAddSubAnimation(this.handle, subAnim)
	}

	public clearSubAnimations (): void {
		BlzSpecialEffectClearSubAnimations(this.handle)
	}

	/**
	 * Destroy the effect handle. This will play the effect's death animation.
	 */
	public destroy (): void {
		DestroyEffect(this.handle)
	}

	public playAnimation (animType: animtype): void {
		BlzPlaySpecialEffect(this.handle, animType)
	}

	public playWithTimeScale (animType: animtype, timeScale: number): void {
		BlzPlaySpecialEffectWithTimeScale(this.handle, animType, timeScale)
	}

	public removeSubAnimation (subAnim: subanimtype): void {
		BlzSpecialEffectRemoveSubAnimation(this.handle, subAnim)
	}

	public resetScaleMatrix (): void {
		BlzResetSpecialEffectMatrix(this.handle)
	}

	public setAlpha (alpha: number): void {
		BlzSetSpecialEffectAlpha(this.handle, alpha)
	}

	public setColor (red: number, green: number, blue: number): void {
		BlzSetSpecialEffectColor(this.handle, red, green, blue)
	}

	public setColorByPlayer (whichPlayer: MapPlayer): void {
		BlzSetSpecialEffectColorByPlayer(this.handle, whichPlayer.handle)
	}

	public setHeight (height: number): void {
		BlzSetSpecialEffectHeight(this.handle, height)
	}

	public setOrientation (yaw: number, pitch: number, roll: number): void {
		BlzSetSpecialEffectOrientation(this.handle, yaw, pitch, roll)
	}

	public setPoint (p: Point): void {
		BlzSetSpecialEffectPositionLoc(this.handle, p.handle)
	}

	public setPosition (x: number, y: number, z: number): void {
		BlzSetSpecialEffectPosition(this.handle, x, y, z)
	}

	public setScaleMatrix (x: number, y: number, z: number): void {
		BlzSetSpecialEffectMatrixScale(this.handle, x, y, z)
	}

	public setTime (value: number): void {
		BlzSetSpecialEffectTime(this.handle, value)
	}

	public setTimeScale (timeScale: number): void {
		BlzSetSpecialEffectTimeScale(this.handle, timeScale)
	}

	// eslint-disable-next-line accessor-pairs
	public set yaw (y: number) {
		BlzSetSpecialEffectYaw(this.handle, y)
	}

	// eslint-disable-next-line accessor-pairs
	public set roll (roll: number) {
		BlzSetSpecialEffectRoll(this.handle, roll)
	}

	// eslint-disable-next-line accessor-pairs
	public set pitch (pitch: number) {
		BlzSetSpecialEffectPitch(this.handle, pitch)
	}

	// eslint-disable-next-line accessor-pairs
	public set orientation (ray: Orientation) {
		BlzSetSpecialEffectOrientation(this.handle, ray.yaw ?? 0, ray.pitch ?? 0, ray.roll ?? 0)
	}

	// eslint-disable-next-line accessor-pairs
	public set vector (vector: IVector) {
		this.position = vector
		this.orientation = vector
	}

	public static fromHandle (handle: effect): Effect {
		return this.getObject(handle)
	}
}
