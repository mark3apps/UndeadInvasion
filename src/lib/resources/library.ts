/** @format */

export const CC2Four = (num: number) => {
  return string.pack(">I4", num)
}

export const GetSpellAbilityFour = () => {
  return CC2Four(GetSpellAbilityId())
}

export const ValueFactor = (level: number, base: number, previousFactor: number, levelFactor: number, constant: number) => {
  if (level === 0) return 0

  let value = base

  if (level > 1) {
    for (let i = 1; i < level; i++) {
      value = value * previousFactor + i * levelFactor + constant
    }
  }

  return value
}

export const LevelValueFactor = (level: number, base: number, previousFactor: number, levelFactor: number, constantFactor: number) => {
  if (level === 1) return 0

  let value = -500

  for (let i = 1; i < level + 1; i++) {
    value = previousFactor * value + levelFactor * i + constantFactor
  }

  return value
}

export const addObjects = <T>(obj1: T, obj2: Record<string, any>): T => {
  return Object.keys(obj1).reduce((a: any, k) => {
    a[k] = typeof (obj1 as any)[k] === "number" || typeof obj2[k] === "number" ? (obj1 as any)[k] + (obj2 as any)[k] : (obj1 as any)[k]
    return a as T
  }, {})
}

export const subtractObjects = <T>(obj1: T, obj2: Record<string, any>): T => {
  return Object.keys(obj1).reduce((a: any, k) => {
    a[k] = typeof (obj1 as any)[k] === "number" || typeof obj2[k] === "number" ? (obj1 as any)[k] - obj2[k] : (obj1 as any)[k]
    return a as T
  }, {})
}

export const divideObjects = <T>(obj1: T, obj2: Record<string, any>): T => {
  return Object.keys(obj1).reduce((a: any, k) => {
    a[k] = typeof (obj1 as any)[k] === "number" || typeof obj2[k] === "number" ? (obj1 as any)[k] / (obj2 as any)[k] : (obj1 as any)[k]
    return a as T
  }, {})
}

export const multiplyObjects = <T>(obj1: T, obj2: Record<string, any>): T => {
  return Object.keys(obj1).reduce((a: any, k) => {
    a[k] = typeof (obj1 as any)[k] === "number" || typeof obj2[k] === "number" ? (obj1 as any)[k] * (obj2 as any)[k] : (obj1 as any)[k]
    return a as T
  }, {})
}

export const toPercent = (value: number) => {
  return math.floor(value * 100)
}
