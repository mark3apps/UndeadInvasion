/** @format */

import { IDamageEngineDepend } from "./interfaces/IDamageEngineDepend"
import { DamageEvent } from "./DamageEvent"
import { IArcTag } from "../arcTag/IArcTag"
import { DamageModifier } from "./DamageModifier"
import { IDamageEventDepend } from "./interfaces/IDamageEventDepend"
import { Hero } from "../hero/hero"
import { ArcTag } from "../arcTag/arctag"
import { Effect, AbilityModel, Attach, MapPlayer, Color } from "w3ts/index"

export class DamageEngine {
  protected static instance?: DamageEngine

  static getInstance(depend: IDamageEngineDepend) {
    if (!DamageEngine.instance) DamageEngine.instance = new DamageEngine(depend)
    return DamageEngine.instance
  }

  constructor(depend: IDamageEngineDepend) {
    depend.triggers.UnitDying.addCondition(() => {
      const event = new DamageEvent()
      this.applyCustomDamage(depend, event)
      return event.target.life - event.damage <= 0
    })

    depend.triggers.UnitDying.addAction(() => {
      const damageEvent = DamageEvent.getLast()
      damageEvent.source.kills += 1

      if (damageEvent.target.isHero) {
        const hero = Hero.fromHandle(damageEvent.target.handle)
        if (hero) hero.heroType.onDeath(hero)
        damageEvent.damage = 0
      }
    })
  }

  applyCustomDamage(depend: IDamageEventDepend, event: DamageEvent) {
    if (event.isSpell()) event.damage *= event.source.spellDamage * event.target.spellResistance

    // Calculate and apply a Critical Strike
    if (event.source.critical > 0) {
      const rand = math.random()
      if (rand <= event.source.critical) {
        event.damage *= event.source.criticalMultiplier
        event.modifier = DamageModifier.Critical
      }
    }

    // Calculate and apply an Evade
    if (event.target.evade > 0 && event.isAttack()) {
      const rand = math.random()
      if (rand <= event.target.evade) {
        event.damage = 0
        event.modifier = DamageModifier.Evade
      }
    }

    const displayDamage = event.damage

    // Calculate and apply shield effect
    if (event.target.shield > 0) {
      event.target.shield -= event.damage
      event.modifier = DamageModifier.Shielded

      // Calculate Effect orientation and position
      const offsetAngle = event.target.angleTo(event.source)
      const effectYaw = offsetAngle * bj_DEGTORAD
      const pos = event.target.polarProjection(20, offsetAngle)

      // Create Shield Effect
      const shieldEffect = new Effect(AbilityModel.spellShieldCaster, pos, { yaw: effectYaw })
      shieldEffect.scale = 0.6
      shieldEffect.destroy()

      if (event.target.shield < 0) {
        event.damage = math.abs(event.target.shield)
        event.target.shield = 0
      } else {
        event.damage = 0
      }
    }

    // Calculate Life Steal
    if (event.source.lifesteal > 0 && event.source.lifePercent < 100 && event.damage > 0 && !event.target.isMechanical && event.isAttack()) {
      event.source.life += event.damage * event.source.lifesteal
      new Effect(AbilityModel.vampiricAuraTarget, event.source, Attach.origin).destroy()
    }

    // Create Text Tags
    if (event.target.isVisible(MapPlayer.fromLocal())) {
      const colorRed = new Color(255, 0, 0)
      let arcTag: IArcTag

      switch (event.modifier) {
        case DamageModifier.Critical:
          arcTag = { unit: event.target, text: `${math.floor(displayDamage)}`, color: colorRed }
          new ArcTag(depend, arcTag)
          break

        case DamageModifier.Evade:
          arcTag = { unit: event.source, text: "miss", color: colorRed }
          new ArcTag(depend, arcTag)
          break

        default:
          break
      }

      if (event.source.owner.controller === MAP_CONTROL_USER && (event.damage > 5 || event.modifier === DamageModifier.Shielded)) {
        arcTag = { unit: event.target, text: `${math.floor(displayDamage)}` }
        new ArcTag(depend, arcTag)
      }
    }
  }
}
