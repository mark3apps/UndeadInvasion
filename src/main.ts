/** @format */

import { Game } from "app/game"
import { addScriptHook, Timer, W3TS_HOOK } from "w3ts/index"

const BUILD_DATE = compiletime(() => new Date().toUTCString())
const TS_VERSION = compiletime(() => require("typescript").version)
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version)

function tsMain() {
  print(`Build: ${BUILD_DATE}`)
  print(`Typescript: v${TS_VERSION}`)
  print(`Transpiler: v${TSTL_VERSION}`)
  print(" ")
  print("Welcome to TypeScript!")

  new Timer().start(0, false, () => {
    const game = Game.getInstance()
  })
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)
