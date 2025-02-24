"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("@prisma/client/runtime/edge.js")
exports.transactionsOutputByHash = /*#__PURE__*/ $mkFactory("SELECT *\nFROM (\nSELECT\ntxo.address AS \"address\",\n(\nSELECT array_agg(obj)\nFROM (\nSELECT json_build_object(\n'unit', 'lovelace',\n'quantity', txo.value::TEXT\n)\nUNION ALL\nSELECT json_build_object(\n'unit', CONCAT(encode(ma.policy, 'hex'), encode(ma.name, 'hex')),\n'quantity', mto.quantity::TEXT\n)\nFROM ma_tx_out mto\nJOIN multi_asset ma ON (mto.ident = ma.id)\nWHERE mto.tx_out_id = txo.id\n) t(obj)\n) as \"amount: Vec<Json<TransactionAmount>>\",\nencode(txo.data_hash, 'hex') AS \"data_hash\",\nencode(dat.bytes, 'hex') AS \"inline_datum\",\nfalse AS \"collateral\",\nencode(scr.hash, 'hex') AS \"reference_script_hash\",\ntxo.index AS \"output_index\",\n(\nSELECT encode(tx.hash, 'hex')\nFROM tx WHERE tx.id = txo.consumed_by_tx_id\n) AS \"consumed_by_tx\"\nFROM tx\nJOIN tx_out txo ON (txo.tx_id = tx.id)\nLEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)\nLEFT JOIN script scr ON (txo.reference_script_id = scr.id)\nWHERE encode(tx.hash, 'hex') = $1\n\nUNION ALL\nSELECT\ntxo.address AS \"address\",\nARRAY[json_build_object('unit', 'lovelace', 'quantity', txo.value::TEXT)] AS \"amount\",\nencode(txo.data_hash, 'hex') AS \"data_hash\",\nencode(dat.bytes, 'hex') AS \"inline_datum\",\ntrue AS \"collateral\",\nencode(scr.hash, 'hex') AS \"reference_script_hash\",\ntxo.index AS \"output_index\",\nNULL as \"consumed_by_tx\"\nFROM tx\nJOIN collateral_tx_out txo ON (txo.tx_id = tx.id)\nLEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)\nLEFT JOIN script scr ON (txo.reference_script_id = scr.id)\nWHERE encode(tx.hash, 'hex') = $1\n) AS \"outputs\"\nORDER BY (output_index, collateral) ASC;")
