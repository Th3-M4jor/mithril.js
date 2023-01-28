"use strict"

const hyperscript = require("./render/hyperscript")
const trust = require("./render/trust")
const fragment = require("./render/fragment")


hyperscript.trust = trust
hyperscript.fragment = fragment

module.exports = hyperscript
