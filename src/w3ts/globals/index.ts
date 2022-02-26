import { MapPlayer } from '../handles/player'

export const Players: MapPlayer[] = []
export * from './unitAnimations'
export * from './fours'
export * from './models'
export * from './mask'
export * from './attachmentPoints'
export * from './icons'
export * from './order'

// eslint-disable-next-line camelcase
for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
	Players[i] = MapPlayer.fromHandle(Player(i))
}

export const PlayerHostile = MapPlayer.fromIndex(PLAYER_NEUTRAL_AGGRESSIVE)
export const PlayerPassive = MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE)
