/** @noSelfInFile **/

import { Handle } from './handle'

export class Timer extends Handle<timer> {
	constructor () {
		if (Handle.initFromHandle()) {
			super()
		} else {
			super(CreateTimer())
		}
	}

	public get elapsed (): number {
		return TimerGetElapsed(this.handle)
	}

	/**
   * @bug This might not return the correct value if the timer was paused and restarted at one point. See http://www.wc3c.net/showthread.php?t=95756.
   */
	public get remaining (): number {
		return TimerGetRemaining(this.handle)
	}

	public get timeout (): number {
		return TimerGetTimeout(this.handle)
	}

	public destroy (): Timer {
		DestroyTimer(this.handle)
		return this
	}

	public pause (): Timer {
		PauseTimer(this.handle)
		return this
	}

	public resume (): Timer {
		ResumeTimer(this.handle)
		return this
	}

	public start (timeout: number, periodic: boolean, handlerFunc: () => void): Timer {
		TimerStart(this.handle, timeout, periodic, handlerFunc)
		return this
	}

	/**
   * @bug Might crash the game if called when there is no expired timer.
   */
	public static fromExpired (): Timer {
		return this.fromHandle(GetExpiredTimer())
	}

	public static fromHandle (handle: timer): Timer {
		return this.getObject(handle)
	}
}
