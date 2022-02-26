/** @noSelfInFile **/

import { Coordinate } from 'app/classes/Coordinate'
import { Handle } from './handle'
import { Point } from './point'

export class Rectangle extends Handle<rect> {
	constructor (minX: number, minY: number, maxX: number, maxY: number) {
		if (Handle.initFromHandle()) {
			super()
		} else {
			super(Rect(minX, minY, maxX, maxY))
		}
	}

	public get centerX (): number {
		return GetRectCenterX(this.handle)
	}

	public get centerY (): number {
		return GetRectCenterY(this.handle)
	}

	public get centerPosition (): Coordinate {
		return { x: this.centerX, y: this.centerY }
	}

	public get maxX (): number {
		return GetRectMaxX(this.handle)
	}

	public get maxY (): number {
		return GetRectMaxY(this.handle)
	}

	public get minX (): number {
		return GetRectMinX(this.handle)
	}

	public get minY (): number {
		return GetRectMinY(this.handle)
	}

	public get randomX (): number {
		return GetRandomReal(this.minX, this.maxX)
	}

	public get randomY (): number {
		return GetRandomReal(this.minY, this.maxY)
	}

	public get randomPosition (): Coordinate {
		return { x: this.randomX, y: this.randomY }
	}

	public destroy (): void {
		RemoveRect(this.handle)
	}

	public enumDestructables (filter: boolexpr | (() => boolean), actionFunc: () => void): void {
		EnumDestructablesInRect(this.handle, typeof filter === 'function' ? Filter(filter) : filter, actionFunc)
	}

	public enumItems (filter: boolexpr | (() => boolean), actionFunc: () => void): void {
		EnumItemsInRect(this.handle, typeof filter === 'function' ? Filter(filter) : filter, actionFunc)
	}

	public move (newCenterX: number, newCenterY: number): void {
		MoveRectTo(this.handle, newCenterX, newCenterY)
	}

	public movePoint (newCenterPoint: Point): void {
		MoveRectToLoc(this.handle, newCenterPoint.handle)
	}

	public setRect (minX: number, minY: number, maxX: number, maxY: number): void {
		SetRect(this.handle, minX, minY, maxX, maxY)
	}

	public setRectFromPoint (min: Point, max: Point): void {
		SetRectFromLoc(this.handle, min.handle, max.handle)
	}

	public static fromHandle (handle: rect): Rectangle {
		return this.getObject(handle)
	}

	public static fromPoint (min: Point, max: Point): Rectangle {
		return this.fromHandle(RectFromLoc(min.handle, max.handle))
	}

	// Returns full map bounds, including unplayable borders, in world coordinates
	public static getWorldBounds (): Rectangle {
		return Rectangle.fromHandle(GetWorldBounds())
	}

	public static getPlayableMap (): Rectangle {
		return Rectangle.fromHandle(GetPlayableMapRect())
	}
}
