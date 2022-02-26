/**
 * @format
 * @noSelfInFile *
 */

import { Position } from "app/classes/position"
import { CameraSetup, Camera } from "./camera"
import { Force } from "./force"
import { Handle } from "./handle"
import { Point } from "./point"
import { Unit } from "./unit"

export class MapPlayer extends Handle<player> {
  private constructor(index: number) {
    if (Handle.initFromHandle()) {
      super()
    } else {
      super(Player(index))
    }
  }

  public set color(color: playercolor) {
    SetPlayerColor(this.handle, color)
  }

  public get color() {
    return GetPlayerColor(this.handle)
  }

  public get controller() {
    return GetPlayerController(this.handle)
  }

  public get handicap() {
    return GetPlayerHandicap(this.handle)
  }

  public set handicap(handicap: number) {
    SetPlayerHandicap(this.handle, handicap)
  }

  public get handicapXp() {
    return GetPlayerHandicapXP(this.handle)
  }

  public set handicapXp(handicap: number) {
    SetPlayerHandicapXP(this.handle, handicap)
  }

  public get id() {
    return GetPlayerId(this.handle)
  }

  public get name() {
    return GetPlayerName(this.handle)
  }

  public set name(value: string) {
    SetPlayerName(this.handle, value)
  }

  public get race() {
    return GetPlayerRace(this.handle)
  }

  public get slotState() {
    return GetPlayerSlotState(this.handle)
  }

  public get startLocation() {
    return GetPlayerStartLocation(this.handle)
  }

  public get startLocationX() {
    return GetStartLocationX(this.startLocation)
  }

  public get startLocationY() {
    return GetStartLocationY(this.startLocation)
  }

  public get startLocationPoint() {
    return GetStartLocationLoc(this.startLocation)
  }

  public get team() {
    return GetPlayerTeam(this.handle)
  }

  public get townHallCount() {
    return BlzGetPlayerTownHallCount(this.handle)
  }

  public get lumber() {
    return GetPlayerState(this.handle, PLAYER_STATE_RESOURCE_LUMBER)
  }

  public set lumber(value: number) {
    SetPlayerState(this.handle, PLAYER_STATE_RESOURCE_LUMBER, value)
  }

  public get gold() {
    return GetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD)
  }

  public set gold(value: number) {
    SetPlayerState(this.handle, PLAYER_STATE_RESOURCE_GOLD, value)
  }

  /**
   * In upgrades that have multiple levels, it will research the upgrade by the number of levels specified.
   * @param techId The four digit rawcode ID of the upgrade.
   * @param levels The number of levels to add to the current research level of the upgrade.
   */
  public addTechResearched(techId: number | string, levels = 1) {
    typeof techId === "string" ? AddPlayerTechResearched(this.handle, FourCC(techId), levels) : AddPlayerTechResearched(this.handle, techId, levels)
  }

  public decTechResearched(techId: number | string, levels = 1) {
    typeof techId === "string" ? BlzDecPlayerTechResearched(this.handle, FourCC(techId), levels) : BlzDecPlayerTechResearched(this.handle, techId, levels)
  }

  /**
   * Used to store hero level data for the scorescreen, before units are moved to neutral passive in melee games.
   */
  public cacheHeroData() {
    CachePlayerHeroData(this.handle)
  }

  public compareAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype) {
    return GetPlayerAlliance(this.handle, otherPlayer.handle, whichAllianceSetting)
  }

  public positionFogged(pos: Position) {
    return IsFoggedToPlayer(pos.x, pos.y, this.handle)
  }

  public positionMasked(pos: Position) {
    return IsMaskedToPlayer(pos.x, pos.y, this.handle)
  }

  public positionVisible(pos: Position) {
    return IsVisibleToPlayer(pos.x, pos.y, this.handle)
  }

  /**
   * Reveals a player's remaining buildings to a force.
   * The black mask over the buildings will be removed as if the territory had been discovered
   * @param toWhichPlayers The players who will see whichPlayer's buildings.
   * @param flag If true, the buildings will be revealed. If false, the buildings will not be revealed.
   * Note that if you set it to false, it will not hide the buildings with a black mask.
   * @note his function will not check whether the player has a town hall before revealing.
   */
  public cripple(toWhichPlayers: Force, flag: boolean) {
    CripplePlayer(this.handle, toWhichPlayers.handle, flag)
  }

  public getScore(whichPlayerScore: playerscore) {
    return GetPlayerScore(this.handle, whichPlayerScore)
  }

  public getState(whichPlayerState: playerstate) {
    return GetPlayerState(this.handle, whichPlayerState)
  }

  public getStructureCount(includeIncomplete: boolean) {
    return GetPlayerStructureCount(this.handle, includeIncomplete)
  }

  public getTaxRate(otherPlayer: player, whichResource: playerstate) {
    return GetPlayerTaxRate(this.handle, otherPlayer, whichResource)
  }

  public getTechCount(techId: number, specificonly: boolean) {
    return GetPlayerTechCount(this.handle, techId, specificonly)
  }

  public getTechMaxAllowed(techId: number) {
    return GetPlayerTechMaxAllowed(this.handle, techId)
  }

  public getTechResearched(techId: number, specificonly: boolean) {
    return GetPlayerTechResearched(this.handle, techId, specificonly)
  }

  public getUnitCount(includeIncomplete: boolean) {
    return GetPlayerUnitCount(this.handle, includeIncomplete)
  }

  public getUnitCountByType(unitName: string, includeIncomplete: boolean, includeUpgrades: boolean) {
    return GetPlayerTypedUnitCount(this.handle, unitName, includeIncomplete, includeUpgrades)
  }

  public inForce(whichForce: Force) {
    return IsPlayerInForce(this.handle, whichForce.handle)
  }

  public isLocal() {
    return GetLocalPlayer() === this.handle
  }

  public isObserver() {
    return IsPlayerObserver(this.handle)
  }

  public isAlly(otherPlayer: MapPlayer) {
    return IsPlayerAlly(this.handle, otherPlayer.handle)
  }

  public isEnemy(otherPlayer: MapPlayer) {
    return IsPlayerEnemy(this.handle, otherPlayer.handle)
  }

  public isRacePrefSet(pref: racepreference) {
    return IsPlayerRacePrefSet(this.handle, pref)
  }

  public isSelectable() {
    return GetPlayerSelectable(this.handle)
  }

  public getSelectedUnits() {
    return GetUnitsSelectedAll(this.handle)
  }

  public getSelectedUnitsCount() {
    const g = GetUnitsSelectedAll(this.handle)
    const count = CountUnitsInGroup(g)
    DestroyGroup(g)
    return count
  }

  public pointFogged(whichPoint: Point) {
    return IsLocationFoggedToPlayer(whichPoint.handle, this.handle)
  }

  public pointMasked(whichPoint: Point) {
    return IsLocationMaskedToPlayer(whichPoint.handle, this.handle)
  }

  public pointVisible(whichPoint: Point) {
    return IsLocationVisibleToPlayer(whichPoint.handle, this.handle)
  }

  public remove(gameResult: playergameresult) {
    RemovePlayer(this.handle, gameResult)
  }

  public removeAllGuardPositions() {
    RemoveAllGuardPositions(this.handle)
  }

  public set givesBounty(value: boolean) {
    SetPlayerState(this.handle, PLAYER_STATE_GIVES_BOUNTY, value ? 1 : 0)
  }

  public get givesBounty(): boolean {
    return GetPlayerState(this.handle, PLAYER_STATE_GIVES_BOUNTY) === 1
  }

  public setAbilityAvailable(abilId: number, avail: boolean) {
    SetPlayerAbilityAvailable(this.handle, abilId, avail)
  }

  public setAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype, value: boolean) {
    SetPlayerAlliance(this.handle, otherPlayer.handle, whichAllianceSetting, value)
  }

  public setOnScoreScreen(flag: boolean) {
    SetPlayerOnScoreScreen(this.handle, flag)
  }

  public setState(whichPlayerState: playerstate, value: number) {
    SetPlayerState(this.handle, whichPlayerState, value)
  }

  public setTaxRate(otherPlayer: MapPlayer, whichResource: playerstate, rate: number) {
    SetPlayerTaxRate(this.handle, otherPlayer.handle, whichResource, rate)
  }

  public setTechMaxAllowed(techId: number, maximum: number) {
    SetPlayerTechMaxAllowed(this.handle, techId, maximum)
  }

  public setTechResearched(techId: number, setToLevel: number) {
    SetPlayerTechResearched(this.handle, techId, setToLevel)
  }

  public setUnitsOwner(newOwner: number) {
    SetPlayerUnitsOwner(this.handle, newOwner)
  }

  public applyCamera(doPan: boolean, camera: CameraSetup, duration: number): void {
    CameraSetupApplyForPlayer(doPan, camera.handle, this.handle, duration)
  }

  public setTargetControllerCamera(unit: Unit, xOffset: number, yOffset: number, inheritOrientation: boolean): void {
    Camera.setTargetControllerForPlayer(this, unit, xOffset, yOffset, inheritOrientation)
  }

  public static fromEnum() {
    return MapPlayer.fromHandle(GetEnumPlayer())
  }

  public static fromEvent() {
    return MapPlayer.fromHandle(GetTriggerPlayer())
  }

  public static fromFilter() {
    return MapPlayer.fromHandle(GetFilterPlayer())
  }

  public static fromHandle(handle: player): MapPlayer {
    return this.getObject(handle)
  }

  public static fromIndex(index: number) {
    return this.fromHandle(Player(index))
  }

  /**
   * @async
   */
  public static fromLocal() {
    return this.fromHandle(GetLocalPlayer())
  }
}
