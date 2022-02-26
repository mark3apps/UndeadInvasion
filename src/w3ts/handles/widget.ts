/** @noSelfInFile **/

import { Coordinate } from 'app/classes/Coordinate'
import { Handle } from './handle'

export class Widget extends Handle<widget> {
	/**
   * Get the Widget's life.
   */
	public get life (): number {
		return GetWidgetLife(this.handle)
	}

	/**
   * Set the Widget's life.
   */
	public set life (value: number) {
		SetWidgetLife(this.handle, value)
	}

	/**
   * Get the Widget's x-coordinate
   */
	public get x (): number {
		return GetWidgetX(this.handle)
	}

	/**
   * Get the Widget's y-coordinate
   */
	public get y (): number {
		return GetWidgetY(this.handle)
	}

	public get coordinate (): Coordinate {
		return { x: GetWidgetX(this.handle), y: GetWidgetY(this.handle) }
	}

	public static fromEvent (): Widget {
		return this.fromHandle(GetTriggerWidget())
	}

	public static fromHandle (handle: widget): Widget {
		return this.getObject(handle)
	}
}
