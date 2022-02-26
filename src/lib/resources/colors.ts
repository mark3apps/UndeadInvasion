/** @format */

export const enum Colors {
  Green = "|cff32cd32",
  Red = "|cffff0000",
  Orange = "|cff995500",
  Yellow = "|cffffcc00",
  LightBlue = "|cff7777aa",
}

export const enum MessageColors {
  Notice = Colors.Orange,
  NewUnit = Colors.LightBlue,
  AllyAquired = Colors.LightBlue,
  Hint = Colors.Green,
  TargetError = Colors.Yellow,
  TooltipHotKey = Colors.Yellow,
  Warning = Colors.Red,
}

export const HintText = (text: string) => {
  return MessageColors.Hint + text + "|r"
}
