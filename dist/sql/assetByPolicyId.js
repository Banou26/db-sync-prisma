"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.assetByPolicyId = /*#__PURE__*/ $mkFactory("SELECT\nasset AS \"asset!\",\nquantity::TEXT AS \"quantity!\" -- cast to TEXT to avoid number overflow\nFROM (\nSELECT MIN(ma_tx_mint.id),\nCONCAT(encode(multi_asset.policy, 'hex'), encode(multi_asset.name, 'hex')) AS \"asset\",\nSUM(quantity) AS \"quantity\"\nFROM ma_tx_mint\nJOIN multi_asset ON (ma_tx_mint.ident = multi_asset.id)\nWHERE encode(policy, 'hex') = $1\nGROUP BY policy, name\nORDER BY MIN(ma_tx_mint.id) ASC\n) AS \"ordered assets\";")
