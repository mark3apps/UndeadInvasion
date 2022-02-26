/** @noSelfInFile **/

import { Handle } from './handle'

export class Ubersplat extends Handle<ubersplat> {
	constructor (x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean) {
		if (Handle.initFromHandle()) {
			super()
		} else {
			super(CreateUbersplat(x, y, name, red, green, blue, alpha, forcePaused, noBirthTime))
		}
	}

	public destroy (): void {
		DestroyUbersplat(this.handle)
	}

	/**
   * @bug Does nothing.
   */
	public finish (): void {
		FinishUbersplat(this.handle)
	}

	public render (flag: boolean, always = false): void {
		if (always) {
			SetUbersplatRenderAlways(this.handle, flag)
		} else {
			SetUbersplatRender(this.handle, flag)
		}
	}

	/**
   * @bug Does nothing.
   */
	public reset (): void {
		ResetUbersplat(this.handle)
	}

	public show (flag: boolean): void {
		ShowUbersplat(this.handle, flag)
	}

	public static fromHandle (handle: ubersplat): Ubersplat {
		return this.getObject(handle)
	}
}
