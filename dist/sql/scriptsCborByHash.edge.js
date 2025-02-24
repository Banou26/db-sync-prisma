"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.scriptsCborByHash = /*#__PURE__*/ $mkFactory("SELECT encode(bytes, 'hex') AS \"cbor!\"\nFROM datum d\nWHERE encode(d.hash, 'hex') = $1\nUNION\nSELECT encode(bytes, 'hex') AS \"cbor!\"\nFROM redeemer_data rd\nWHERE encode(rd.hash, 'hex') = $1;")
