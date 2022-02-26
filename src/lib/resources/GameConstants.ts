/** @format */

export const GameConstants = {
  MagicImmunesResistDamage: false,
  MagicImmunesResistThorns: true,
  MagicImmunesResistLeech: true,
  MagicImmunesResistUltimates: true,
  CycloneStasis: true,
  DepCheckAlias: false,
  MassTeleportCluster: false,
  DarkSummoningCluster: false,
  TownPortalCluster: false,
  AmuletOfRecallCluster: false,
  MorphLandClosest: false,
  MorphAlternateDisable: true,
  InvulnSummonDispelDamage: true,
  ConstructionDamageRefundPenalty: true,
  UpgradeDamageRefundPenalty: false,
  AllowMultiBounce: true,
  EnsnareIsMagic: true,
  WebIsMagic: true,
  IllusionsGetAttackBonus: false,
  IllusionsGetAttackSpeedBonus: false,
  IllusionsGetMoveSpeedBonus: false,
  IllusionsGetDefenseBonus: false,
  IllusionsCanRestoreLife: false,
  IllusionsCanRestoreMana: false,
  IllusionsBestowAuras: false,
  IllusionsGetAutocast: false,
  InvisibleUnitsBestowAuras: false,
  PolymorphedUnitsBestowAuras: false,
  BurrowedUnitsBestowAuras: false,
  AnimatedUnitsBestowAuras: false,
  FlyingHeroesBestowAuras: false,
  MoveSpeedBonusesStack: true,
  DrainUsesEtheralBonus: false,
  DrainTransfersLife: false,
  DrainTransfersMana: false,
  DrainGivesBonusLife: false,
  DrainGivesBonusMana: false,
  EtherealDamageBonusAlly: true,
  CanDeactivateAvatar: false,
  CanDeactivateAvengerForm: false,
  CanDeactivateBarkskin: true,
  CanDeactivateBearForm: true,
  CanDeactivateBladestorm: false,
  CanDeactivateBurrow: true,
  CanDeactivateCallToArms: true,
  CanDeactivateChemicalRage: false,
  CanDeactivateCorporealForm: true,
  CanDeactivateDefend: true,
  CanDeactivateDivineShield: true,
  CanDeactivateImmolation: true,
  CanDeactivateManaFlare: false,
  CanDeactivateManaShield: true,
  CanDeactivateMetamorphosis: false,
  CanDeactivateRavenForm: true,
  CanDeactivateRoboGoblin: true,
  CanDeactivateStoneForm: true,
  CanDeactivateSubmerge: true,
  CanDeactivateWindWalk: false,
  RelativeUpgradeCost: true,
  DefendDeflection: false,
  UnitSaleAggroRange: false,
  AbilSaleAggroRange: false,
  AbolishMagicDispelSmart: false,
  UpgradeInProgressIdChange: true,

  GlobalExperience: false,
  MaxLevelHeroesDrainExp: false,
  BuildingKillsGiveExp: true,

  DisplayEnemyInventory: false,
  DisplayBuildingStatus: false,

  // Max revival cost of a hero
  HeroMaxReviveCostGold: 700,
  HeroMaxReviveCostLumber: false,
  HeroMaxReviveTime: 150,

  // Max awaken (tavern) cost of a hero
  HeroMaxAwakenCostGold: 1400,
  HeroMaxAwakenCostLumber: 350,

  // Hero Revive & Awaken returning stats
  HeroReviveManaStart: true,
  HeroReviveManaFactor: 0.0,
  HeroReviveLifeFactor: 1.0,
  HeroAwakenManaStart: false,
  HeroAwakenManaFactor: 0.0,
  HeroAwakenLifeFactor: 0.5,

  // the distance at which heroes still gain XP for dying units
  HeroExpRange: 1200,

  // factors for calculating the cost, time to revive a hero
  // goldRevivalCost :  originalCost * (ReviveBaseFactor + (ReviveLevelFactor*(level-1)))
  //	but not exceeding originalCost * ReviveMaxFactor
  // lumberRevivalCost :  originalCost * (ReviveBaseLumberFactor + (ReviveLumberLevelFactor*(level-1)))
  //	but not exceeding originalCost * ReviveMaxFactor
  // revivalTime :  originalTime * level * ReviveTimeFactor
  //	but not exceeding originalTime * ReviveMaxTimeFactor
  ReviveBaseFactor: 0.4,
  ReviveLevelFactor: 0.1,
  ReviveBaseLumberFactor: false,
  ReviveLumberLevelFactor: false,
  ReviveMaxFactor: 4.0,
  ReviveTimeFactor: 0.65,
  ReviveMaxTimeFactor: 2.0,

  // Note: Maps saved with a Reign of Chaos version of the editor will use 25 for the
  //  min unit speed value since it wasn't increased to 150 until Frozen Throne.
  MinUnitSpeed: 10,
  MaxUnitSpeed: 400,
  MinBldgSpeed: 10,
  MaxBldgSpeed: 400,

  FrostMoveSpeedDecrease: 0.5,
  FrostAttackSpeedDecrease: 0.25,

  // Experience & Level Information
  //
  MaxHeroLevel: 10,
  MaxUnitLevel: 20,
  NeedHeroXP: 0,
  GrantHeroXP: 400,
  GrantNormalXP: 45,
  HeroFactorXP: 100,
  SummonedKillFactor: 0.5,
  StrAttackBonus: 1.0,
  StrHitPointBonus: 25,
  StrRegenBonus: 0.05,
  IntManaBonus: 15,
  IntRegenBonus: 0.05,
  AgiDefenseBonus: 0.3,
  AgiDefenseBase: -2,
  AgiMoveBonus: false,
  AgiAttackSpeedBonus: 0.02,

  // Formula constants for hero levels beyond the tables...
  // The three constants are used to define a table as:
  //
  // f(x) :  A*f(x-1) + B*x + C
  //
  // where A,B,C are the constants given below
  //
  NeedHeroXPFormulaA: 1,
  NeedHeroXPFormulaB: 100,
  NeedHeroXPFormulaC: 200,
  GrantHeroXPFormulaA: 1,
  GrantHeroXPFormulaB: 0,
  GrantHeroXPFormulaC: 100,
  GrantNormalXPFormulaA: 10,
  GrantNormalXPFormulaB: 50,
  GrantNormalXPFormulaC: 5,

  // Hero ability level skip
  // The required hero level for a given ability level is:
  //
  // baseReq + levelSkip*abilityLevel
  //

  HeroAbilityLevelSkip: 2,

  // Hero Inventory Items
  DropItemRange: 100,
  GiveItemRange: 150,
  PickupItemRange: 150,
  PawnItemRange: 300,
  PawnItemRate: 0.5,

  // combat related entries
  CallForHelp: 600,
  CreepCallForHelp: 600,
  DefenseArmor: 0.06,

  // Damage bonus lists: SMALL, MEDIUM, LARGE, FORT, NORMAL, HERO, DIVINE, NONE
  DamageBonusNormal: [1.5, 1.0, 1.0, 0.5, 1.0, 1.0, 0.05, 1.0],
  DamageBonusPierce: [0.75, 1.0, 1.5, 0.35, 1.0, 0.5, 0.05, 1.5],
  DamageBonusSiege: [0.5, 1.0, 1.0, 1.5, 1.0, 0.5, 0.05, 1.5],
  DamageBonusMagic: [1.0, 2.0, 1.0, 0.35, 1.0, 0.5, 0.05, 1.0],
  DamageBonusChaos: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  DamageBonusSpells: [1.0, 1.0, 1.0, 1.0, 1.0, 0.75, 0.05, 1.0],
  DamageBonusHero: [1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.05, 1.0],

  // Ethereal Damage bonus values: NORMAL, PIERCE, SIEGE, MAGIC, CHAOS, SPELLS, HERO
  EtherealDamageBonus: [0, 0, 0, 1.66, 0, 1.66, 0],
  EtherealHealBonus: 1.66,

  // After a unit has strayed 'GuardDistance' from where it started,
  // that unit begins thinking about heading back to its start position.
  // If the unit has move 'GuardDistance' away from "home" at any time
  // and spends 'GuardReturnTime' seconds chasing a target without getting
  // attacked by anyone, the unit indeed turns around and heads home.
  // If a creep goes beyond 'MaxGuardDistance' then it always returns home
  // regardless of who's attacking it.
  //
  GuardDistance: 600,
  MaxGuardDistance: 1000,
  GuardReturnTime: 5.0,

  // refund rates
  ConstructionRefundRate: 0.75, // for cancelled construction
  ResearchRefundRate: 1.0, // for cancelled research of spells or unit improvements
  ReviveRefundRate: 1.0, // for cancelled hero revival
  TrainRefundRate: 1.0, // currently applied regardless of location in queue
  UpgradeRefundRate: 0.75, // for a cancelled structure upgrade

  ConstructionLifeDrainRate: 10.0, // hp per second drained when building construction is halted
  ShowHideUnitsInTransport: true,
}
