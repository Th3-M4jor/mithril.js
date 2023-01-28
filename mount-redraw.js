"use strict"

const render = require("./render")
const redraw = require("./api/mount-redraw")

module.exports = redraw(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null)
