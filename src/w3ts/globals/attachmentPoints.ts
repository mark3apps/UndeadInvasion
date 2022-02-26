/**
 * Class that contains every known attachmentpoint in game
 *
 * @format
 */

export enum Attach {
  /** The attachmentpoint 'overhead' floats over the unit's head, but doesn't sway with it */
  overhead = "overhead",
  /** The attachmentpoint 'head' sways with the unit's animation */
  head = "head",
  chest = "chest",
  /** The attachmentpoint 'origin' is usually fitted at the base of the unit's feet */
  origin = "origin",
  hand = "hand",
  foot = "foot",
  /** The attachmentpoint 'weapon' is for heroes only */
  weapon = "weapon",
  sprite = "sprite",
  /** The attachmentpoint 'medium' is for buildings only */
  medium = "medium",
  /** The attachmentpoint 'large' is for buildings only */
  large = "large",
}

/** Class that contains every known attachmentpointmodifier in game */
export enum AttachMod {
  left = "left",
  right = "right",
  /** The attachmentpointmodifier 'mount' is for mounted units only */
  mount = "mount",
  /** The attachmentpointmodifier 'rear' is for quadrupeds only */
  rear = "rear",
  /** The attachmentpointmodifier 'first' is for buildings only */
  first = "first",
  /** The attachmentpointmodifier 'second' is for buildings only */
  second = "second",
  /** The attachmentpointmodifier 'third' is for buildings only */
  third = "third",
  /** The attachmentpointmodifier 'fourth' is for buildings only */
  fourth = "fourth",
  /** The attachmentpointmodifier 'fifth' is for buildings only */
  fifth = "fifth",
  /** The attachmentpointmodifier 'sixth' is for buildings only */
  sixth = "sixth",
  /** The attachmentpointmodifier 'rallypoint' is for buildings only */
  rallypoint = "rallypoint",
}

/** Class that contains every known special attachmentpoint in game */
export enum AttachSpecial {
  rightHand = "hand right",
  leftHand = "hand left",
  rightFoot = "foot right",
  leftFoot = "foot left",
  /** The attachmentpoint 'frontRightFoot' is for animals only */
  frontRightFoot = "foot right front",
  /** The attachmentpoint 'frontLeftFoot' is for animals only */
  frontLeftFoot = "foot left front",
  /** The attachmentpoint 'backRightFoot' is for animals only */
  backRightFoot = "foot right back",
  /** The attachmentpoint 'backLeftFoot' is for animals only */
  backLeftFoot = "foot left back",

  /** The attachmentpoint 'firstSprite' is for buildings only */
  firstSprite = "first sprite",
  /** The attachmentpoint 'secondSprite' is for buildings only */
  secondSprite = "second sprite",
  /** The attachmentpoint 'thirdSprite' is for buildings only */
  thirdSprite = "third sprite",
  /** The attachmentpoint 'fourthSprite' is for buildings only */
  fourthSprite = "fourth sprite",
  /** The attachmentpoint 'fifthSprite' is for buildings only */
  fifthSprite = "fifth sprite",
  /** The attachmentpoint 'sixthSprite' is for buildings only */
  sixthSprite = "sixth sprite",
  /** The attachmentpoint 'rallypointSprite' is for buildings only */
  rallypointSprite = "rallypoint sprite",

  /** The attachmentpoint 'firstMedium' is for buildings only */
  firstMedium = "first medium",
  /** The attachmentpoint 'secondMedium' is for buildings only */
  secondMedium = "second medium",
  /** The attachmentpoint 'thirdMedium' is for buildings only */
  thirdMedium = "third medium",
  /** The attachmentpoint 'fourthMedium' is for buildings only */
  fourthMedium = "fourth medium",
  /** The attachmentpoint 'fifthMedium' is for buildings only */
  fifthMedium = "fifth medium",
  /** The attachmentpoint 'sixthMedium' is for buildings only */
  sixthMedium = "sixth medium",
  /** The attachmentpoint 'rallypointMedium' is for buildings only */
  rallypointMedium = "rallypoint medium",

  /** The attachmentpoint 'firstLarge' is for buildings only */
  firstLarge = "first large",
  /** The attachmentpoint 'secondLarge' is for buildings only */
  secondLarge = "second large",
  /** The attachmentpoint 'thirdLarge' is for buildings only */
  thirdLarge = "third large",
  /** The attachmentpoint 'fourthLarge' is for buildings only */
  fourthLarge = "fourth large",
  /** The attachmentpoint 'fifthLarge' is for buildings only */
  fifthLarge = "fifth large",
  /** The attachmentpoint 'sixthLarge' is for buildings only */
  sixthLarge = "sixth large",
  /** The attachmentpoint 'rallypointLarge' is for buildings only */
  rallypointLarge = "rallypoint large",
}
