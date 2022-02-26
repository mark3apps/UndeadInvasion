/** @noSelfInFile **/

import { Players } from '../globals/index'
import { Handle } from './handle'
import { MapPlayer } from './player'

export class Force extends Handle<force> {
	constructor () {
		if (Handle.initFromHandle()) {
			super()
		} else {
			super(CreateForce())
		}
	}

	public addPlayer (whichPlayer: MapPlayer): void {
		ForceAddPlayer(this.handle, whichPlayer.handle)
	}

	public addPlayers (whichPlayers: number[]): void {
		for (let index = 0; index < whichPlayers.length; index++) {
			const element = whichPlayers[index]

			ForceAddPlayer(this.handle, Players[element].handle)
		}
	}

	public pingMinimap (x: number, y: number, duration: number, flashy = false): void {
		this.pingMinimapEx(x, y, duration, flashy, 255, 255, 255)
	}

	public pingMinimapEx (x: number, y: number, duration: number, flashy: boolean, red: number, green: number, blue: number): void {
		if (this.hasPlayer(MapPlayer.fromLocal())) {
			//  Prevent 100% red simple and flashy pings, as they become "attack" pings.
			if (red === 255 && green === 0 && blue === 0) { red = 254 }
			PingMinimapEx(x, y, duration, red, green, blue, flashy)
		}
	}

	public clear (): void {
		ForceClear(this.handle)
	}

	public destroy (): void {
		DestroyForce(this.handle)
	}

	public displayTimedText (duration: number, message: string): void {
		DisplayTimedTextToForce(this.handle, duration, message)
	}

	public enumAllies (whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)): void {
		ForceEnumAllies(this.handle, whichPlayer.handle, typeof filter === 'function' ? Filter(filter) : filter)
	}

	public enumEnemies (whichPlayer: MapPlayer, filter: boolexpr | (() => boolean)): void {
		ForceEnumEnemies(this.handle, whichPlayer.handle, typeof filter === 'function' ? Filter(filter) : filter)
	}

	public enumPlayers (filter: boolexpr | (() => boolean)): void {
		ForceEnumPlayers(this.handle, typeof filter === 'function' ? Filter(filter) : filter)
	}

	public enumPlayersCounted (filter: boolexpr | (() => boolean), countLimit: number): void {
		ForceEnumPlayersCounted(this.handle, typeof filter === 'function' ? Filter(filter) : filter, countLimit)
	}

	public for (callback: () => void): void {
		ForForce(this.handle, callback)
	}

	/**
	 * Returns all player handles belonging to this force
	 */
	public getPlayers (): MapPlayer[] {
		const players: MapPlayer[] = []

		ForForce(this.handle, () => players.push(MapPlayer.fromEnum()))

		return players
	}

	public getRandomPlayer (): MapPlayer {
		const players = this.getPlayers()
		return players[math.floor(math.random(0, players.length - 1))]
	}

	public hasPlayer (whichPlayer: MapPlayer): boolean {
		return IsPlayerInForce(whichPlayer.handle, this.handle)
	}

	public removePlayer (whichPlayer: MapPlayer): void {
		ForceRemovePlayer(this.handle, whichPlayer.handle)
	}

	public static fromHandle (handle: force): Force {
		return this.getObject(handle)
	}
}
