/** @format */

import { UnitType } from "lib/classes/unitType/UnitType"
import { UnitFour } from "w3ts/index"

export class UnitTypes {
  private static instance: UnitTypes

  static getInstance() {
    if (!UnitTypes.instance) UnitTypes.instance = new UnitTypes()
    return UnitTypes.instance
  }

  Arbalist
  AncientOfWar
  AncientOfLife
  Assassin
  Bandit
  BanditSummon
  BanditLord
  BanditSpearman
  BattleGolem
  BloodElfArcher
  BloodElfBreaker
  BloodElfMage
  Captain1
  Captain2
  Catapult
  Commander
  DraeneiDarkslayer
  DraeneiDemolisher
  DraeneiGuardian
  DraeneiSeer
  DraeneiVindicator
  DragonHawk
  DragonTurtle
  DruidOfTheClaw
  DruidOfTheClawBear
  Dryad
  DwarfAxethrower
  DwarfClansman
  DwarfElite
  Enforcer
  EredarWarlock
  FelOrcWarlock
  Footman1
  Footman2
  Ghoul
  GiantSkeleton
  Grunt
  GryphonRider
  Gyrocopter
  InfernalContraption
  InfernalJuggernaut
  InfernalMachine
  HighElfApprenticeSwordsman
  HighElfArcher
  HighElfGuardian
  HighElfHealer
  HighElfKnight
  HighElfSwordsman
  HippogryphRider
  HumanBattleship
  HumanFrigate
  IronCaptain
  IronGuard
  IronMagi
  IronMortarTeam
  IronRifleman
  Knight
  Lich
  MagiDefender
  Militia1
  Militia2
  MountainGiant
  MurlocCliffRunner
  MurlocReaver
  MurlocSnareCaster
  MurlocTideWarrior
  NavyCaptain
  NavyFootman
  NavyMarine
  Crossbowman
  NagaMyrmidon
  NagaSiren
  NagaRoyalGuard
  Necromancer
  NightElfBattleship
  NightElfFrigate
  NightElfRanger
  NightElfEliteRanger
  NightElfSentry
  Ogre
  OrcWarlord
  Rogue
  SeigeEngine
  SeigeEngineDamaged
  SeigeGolem
  SkeletonArcher
  SkeletonWarrior
  SkeletonMage
  SnapDragon
  Sorceress
  Summoner
  SupremeWizard
  StormSummoner
  TrollAxethrower
  WarGolem
  Warlock
  WaterElemental1
  WaterElemental2
  WaterElemental3
  NightElfWarden
  VillagerMale1
  VillagerMale2
  VillagerFemale1
  VillagerChild1
  VillagerChild2
  Treant
  CorruptedTreant

  AspectOfTheTides
  AspectOfTheStorm
  AspectOfTheEarth
  AspectOfTheForest
  AspectOfDeath
  AspectOfFire

  CastleGateOpen
  CastleGateClosed
  CityBuilding03
  CityBuilding04
  CityBuilding09
  CityBuilding10
  CityBuilding11
  DwarvenGateClosed
  DwarvenGateOpen
  MercTent
  MercLookout
  NerubianZiggurat
  WildhammerCottage
  WildhammerFarmLarge
  WildhammerFarm
  WildhammerMound
  ArcaneManaTower
  ArcaneFlameTower
  ArcaneSorcerersTower
  ArcaneManaRepository

  Dummy
  DummyManaStorm
  DummyMarkForDeath
  DummySeer
  DummyCenterEvent
  DummyShiftstorm
  DummyCameraLock
  UIDummy

  FelShifter1

  constructor() {
    this.Arbalist = new UnitType({ four: "n00X" })
    this.AncientOfWar = new UnitType({ four: UnitFour.AncientOfWarCreep })
    this.AncientOfLife = new UnitType({ four: "n00F" })
    this.Assassin = new UnitType({ four: UnitFour.Assassin })
    this.Bandit = new UnitType({ four: "n002" })
    this.BanditSummon = new UnitType({ four: "n00V", factorySummon: true })
    this.BanditLord = new UnitType({ four: "n005" })
    this.BanditSpearman = new UnitType({ four: "n003" })
    this.BattleGolem = new UnitType({ four: UnitFour.Battlegolem })
    this.BloodElfArcher = new UnitType({ four: "n00C" })
    this.BloodElfBreaker = new UnitType({ four: UnitFour.Spellbreaker })
    this.BloodElfMage = new UnitType({ four: UnitFour.Priest })
    this.Captain1 = new UnitType({ four: UnitFour.Thecaptain })
    this.Captain2 = new UnitType({ four: "h00S" })
    this.Catapult = new UnitType({ four: UnitFour.Mortarteam })
    this.Commander = new UnitType({ four: "h00D" })
    this.DraeneiDarkslayer = new UnitType({ four: UnitFour.DraeneiDarkslayer })
    this.DraeneiDemolisher = new UnitType({ four: UnitFour.DraeneiDemolisher })
    this.DraeneiGuardian = new UnitType({ four: UnitFour.DraeneiGuardian })
    this.DraeneiSeer = new UnitType({ four: UnitFour.DraeneiSeer })
    this.DraeneiVindicator = new UnitType({ four: "n00I" })
    this.DragonHawk = new UnitType({ four: UnitFour.Windserpent })
    this.DragonTurtle = new UnitType({ four: UnitFour.Dragonturtle })
    this.DruidOfTheClaw = new UnitType({ four: UnitFour.Druidoftheclaw })
    this.DruidOfTheClawBear = new UnitType({ four: UnitFour.Druidoftheclawmorphed })
    this.Dryad = new UnitType({ four: UnitFour.Dryad })
    this.DwarfAxethrower = new UnitType({ four: "n006" })
    this.DwarfClansman = new UnitType({ four: "e00E" })
    this.DwarfElite = new UnitType({ four: "e00F" })
    this.Enforcer = new UnitType({ four: "n008" })
    this.EredarWarlock = new UnitType({ four: UnitFour.Eredarwarlock })
    this.FelOrcWarlock = new UnitType({ four: UnitFour.Chaoswarlock })
    this.Footman1 = new UnitType({ four: UnitFour.Footman })
    this.Footman2 = new UnitType({ four: "h017" })
    this.Ghoul = new UnitType({ four: UnitFour.Ghoul })
    this.GiantSkeleton = new UnitType({ four: UnitFour.Fleshgolem })
    this.Grunt = new UnitType({ four: "o002" })
    this.GryphonRider = new UnitType({ four: UnitFour.Gryphonrider })
    this.Gyrocopter = new UnitType({ four: UnitFour.Flyingmachine })
    this.InfernalContraption = new UnitType({ four: UnitFour.Infernalcontraption })
    this.InfernalJuggernaut = new UnitType({ four: UnitFour.Infernaljuggernaut })
    this.InfernalMachine = new UnitType({ four: UnitFour.Infernalmachine })
    this.HighElfApprenticeSwordsman = new UnitType({ four: "h00T" })
    this.HighElfArcher = new UnitType({ four: UnitFour.Highelvenarcher })
    this.HighElfGuardian = new UnitType({ four: "h010" })
    this.HighElfHealer = new UnitType({ four: UnitFour.Emissary })
    this.HighElfKnight = new UnitType({ four: "h005" })
    this.HighElfSwordsman = new UnitType({ four: UnitFour.Highelvenswordsman })
    this.HippogryphRider = new UnitType({ four: UnitFour.Riddenhippogryph })
    this.HumanBattleship = new UnitType({ four: UnitFour.Humanbattleship })
    this.HumanFrigate = new UnitType({ four: UnitFour.Humandestroyer })
    this.IronCaptain = new UnitType({ four: "h01P" })
    this.IronGuard = new UnitType({ four: "h01O" })
    this.IronMagi = new UnitType({ four: "h01E" })
    this.IronMortarTeam = new UnitType({ four: "h001" })
    this.IronRifleman = new UnitType({ four: "h008" })
    this.Knight = new UnitType({ four: "h00L" })
    this.Lich = new UnitType({ four: "u000" })
    this.MagiDefender = new UnitType({ four: "h00K" })
    this.Militia1 = new UnitType({ four: "h007" })
    this.Militia2 = new UnitType({ four: "h015" })
    this.MountainGiant = new UnitType({ four: "e005" })
    this.MurlocCliffRunner = new UnitType({ four: UnitFour.Murgulcliffrunner })
    this.MurlocReaver = new UnitType({ four: UnitFour.Murgulreaver })
    this.MurlocSnareCaster = new UnitType({ four: UnitFour.Murgulsnarecaster })
    this.MurlocTideWarrior = new UnitType({ four: UnitFour.Murgultidewarrior })
    this.NavyCaptain = new UnitType({ four: "h018", replaceOnSummon: true })
    this.NavyFootman = new UnitType({ four: "h013", replaceOnSummon: true })
    this.NavyMarine = new UnitType({ four: "h016", replaceOnSummon: true })
    this.Crossbowman = new UnitType({ four: "n00X", replaceOnSummon: true })
    this.NagaMyrmidon = new UnitType({ four: UnitFour.Nagamyrmidon })
    this.NagaSiren = new UnitType({ four: UnitFour.Siren })
    this.NagaRoyalGuard = new UnitType({ four: UnitFour.Nagaroyalguard })
    this.Necromancer = new UnitType({ four: UnitFour.Necromancer })
    this.NightElfBattleship = new UnitType({ four: UnitFour.Nightelfbattleship })
    this.NightElfFrigate = new UnitType({ four: UnitFour.Nightelfdestroyer })
    this.NightElfRanger = new UnitType({ four: UnitFour.Archer })
    this.NightElfEliteRanger = new UnitType({ four: "e000" })
    this.NightElfSentry = new UnitType({ four: UnitFour.Watcher })
    this.Ogre = new UnitType({ four: UnitFour.Stonemaulogre })
    this.OrcWarlord = new UnitType({ four: UnitFour.OrcWarlord })
    this.Rogue = new UnitType({ four: "n00L" })
    this.SeigeEngine = new UnitType({ four: "h011" })
    this.SeigeEngineDamaged = new UnitType({ four: UnitFour.Siegeengine })
    this.SeigeGolem = new UnitType({ four: UnitFour.Siegegolem })
    this.SkeletonArcher = new UnitType({ four: UnitFour.Skeletalarchersummoned })
    this.SkeletonWarrior = new UnitType({ four: UnitFour.Skeleton })
    this.SkeletonMage = new UnitType({ four: UnitFour.Skeletalmage })
    this.SnapDragon = new UnitType({ four: UnitFour.Snapdragon })
    this.Sorceress = new UnitType({ four: "h00C" })
    this.Summoner = new UnitType({ four: "n018" })
    this.SupremeWizard = new UnitType({ four: "n00A" })
    this.StormSummoner = new UnitType({ four: UnitFour.Chaplain })
    this.TrollAxethrower = new UnitType({ four: UnitFour.Foresttroll })
    this.WarGolem = new UnitType({ four: UnitFour.Wargolem })
    this.Warlock = new UnitType({ four: UnitFour.War2warlock })
    this.WaterElemental1 = new UnitType({ four: UnitFour.Waterelemental1 })
    this.WaterElemental2 = new UnitType({ four: UnitFour.Waterelemental2 })
    this.WaterElemental3 = new UnitType({ four: UnitFour.Waterelemental3 })
    this.NightElfWarden = new UnitType({ four: UnitFour.Nightelfassassin })
    this.VillagerMale1 = new UnitType({ four: UnitFour.Villagerman, order: false })
    this.VillagerMale2 = new UnitType({ four: UnitFour.Villagerman2, order: false })
    this.VillagerFemale1 = new UnitType({ four: UnitFour.Villagerwoman, order: false })
    this.VillagerChild1 = new UnitType({ four: UnitFour.Villagerkid, order: false })
    this.VillagerChild2 = new UnitType({ four: UnitFour.Villagerkid2, order: false })
    this.Treant = new UnitType({ four: "e008" })
    this.CorruptedTreant = new UnitType({ four: "e008" })

    // Aspects
    this.AspectOfTheTides = new UnitType({ four: UnitFour.Murgulshadowcaster, preload: false })
    this.AspectOfTheStorm = new UnitType({ four: UnitFour.Bereserkelemental, preload: false })
    this.AspectOfTheEarth = new UnitType({ four: "n01A", preload: false })
    this.AspectOfTheForest = new UnitType({ four: "n00N", preload: false })
    this.AspectOfDeath = new UnitType({ four: UnitFour.Abomination, preload: false })
    this.AspectOfFire = new UnitType({ four: "n00H", preload: true })

    // Buildings
    this.CastleGateOpen = new UnitType({ four: "h020", order: false })
    this.CastleGateClosed = new UnitType({ four: "h021", order: false })
    this.CityBuilding03 = new UnitType({ four: UnitFour.CitybuildingSmall2, order: false, leaveCorpse: true })
    this.CityBuilding04 = new UnitType({ four: UnitFour.CitybuildingSmall5, order: false, leaveCorpse: true })
    this.CityBuilding09 = new UnitType({ four: UnitFour.CitybuildingSmall9, order: false, leaveCorpse: true })
    this.CityBuilding10 = new UnitType({ four: UnitFour.CitybuildingSmall10, order: false, leaveCorpse: true })
    this.CityBuilding11 = new UnitType({ four: UnitFour.CitybuildingSmall11, order: false, leaveCorpse: true })
    this.DwarvenGateClosed = new UnitType({ four: "h01G", order: false })
    this.DwarvenGateOpen = new UnitType({ four: "h01C", order: false })
    this.MercTent = new UnitType({ four: "n00M", order: false })
    this.MercLookout = new UnitType({ four: "o004", order: false })
    this.NerubianZiggurat = new UnitType({ four: UnitFour.Nerubianziggurat, order: false })
    this.WildhammerCottage = new UnitType({ four: "h01W", order: false })
    this.WildhammerFarmLarge = new UnitType({ four: "h01F", order: false })
    this.WildhammerFarm = new UnitType({ four: "h01U", order: false })
    this.WildhammerMound = new UnitType({ four: "h01X", order: false })
    this.ArcaneManaTower = new UnitType({ four: "h00G", order: false })
    this.ArcaneFlameTower = new UnitType({ four: "nft2", order: false })
    this.ArcaneSorcerersTower = new UnitType({ four: "n007", order: false })
    this.ArcaneManaRepository = new UnitType({ four: "h024", order: false })

    // Extras
    this.Dummy = new UnitType({ four: "h00U", order: false })
    this.DummyManaStorm = new UnitType({ four: "h01H" })
    this.DummyMarkForDeath = new UnitType({ four: "e00D" })
    this.DummySeer = new UnitType({ four: "h00H", order: false })
    this.DummyCenterEvent = new UnitType({ four: "n01U", order: false })
    this.DummyShiftstorm = new UnitType({ four: "o006" })
    this.DummyCameraLock = new UnitType({ four: "h01Z" })
    this.UIDummy = new UnitType({ four: "n01V", order: false })

    this.FelShifter1 = new UnitType({ four: "E004", order: false })
  }
}
