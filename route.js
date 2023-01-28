"use strict"

const mountRedraw = require("./mount-redraw")
const router = require("./api/router")

module.exports = router(typeof window !== "undefined" ? window : null, mountRedraw)
