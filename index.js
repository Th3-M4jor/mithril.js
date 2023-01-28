"use strict"

const hyperscript = require("./hyperscript")
const request = require("./request")
const mountRedraw = require("./mount-redraw")
const domFor = require("./render/domFor")
const route = require("./route")
const render = require("./render")
const parseQueryString = require("./querystring/parse")
const buildQueryString = require("./querystring/build")
const parsePathname = require("./pathname/parse")
const buildPathname = require("./pathname/build")
const vnode = require("./render/vnode")
const censor = require("./util/censor")

const m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.Fragment = "["
m.mount = mountRedraw.mount
m.route = route
m.render = render
m.redraw = mountRedraw.redraw
m.request = request.request
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.parsePathname = parsePathname
m.buildPathname = buildPathname
m.vnode = vnode
m.censor = censor
m.domFor = domFor.domFor

module.exports = m
