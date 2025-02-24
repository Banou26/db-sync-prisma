"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.addresses = /*#__PURE__*/ $mkFactory("SELECT\ntxo.address AS \"address!\",\nSUM(quantity)::TEXT AS \"quantity!\" -- cast to TEXT to avoid number overflow\nFROM ma_tx_out mto\nJOIN multi_asset ma ON (mto.ident = ma.id)\nJOIN tx_out txo ON (txo.id = mto.tx_out_id)\nJOIN tx ON (tx.id = txo.tx_id)\nWHERE (encode(ma.policy, 'hex') || encode(ma.name, 'hex')) = $1\nAND tx.valid_contract = 'true'\nGROUP BY txo.address\nORDER BY MIN(tx.id) ASC\nLIMIT $2\nOFFSET $3;")
