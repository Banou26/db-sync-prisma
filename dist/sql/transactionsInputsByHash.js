"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.transactionsInputsByHash = /*#__PURE__*/ $mkFactory("SELECT *\nFROM (\nSELECT txi.id AS \"tx_in_id\",\ntxo.address AS \"address\",\nencode(tx2.hash, 'hex') AS \"tx_hash\", -- output hash of previous UTxO\ntxi.tx_out_index AS \"output_index\", -- output index of previous UTxO\n(\nSELECT array_agg(obj)\nFROM (\nSELECT json_build_object(\n'unit', 'lovelace',\n'quantity', txo.value::TEXT\n)\nUNION ALL\nSELECT json_build_object(\n'unit', CONCAT(encode(ma.policy, 'hex'), encode(ma.name, 'hex')),\n'quantity', mto.quantity::TEXT\n)\nFROM ma_tx_out mto\nJOIN multi_asset ma ON (mto.ident = ma.id)\nWHERE mto.tx_out_id = txo.id\n) t(obj)\n) as \"amount: Vec<Json<TransactionAmount>>\",\nfalse AS \"collateral\",\nfalse AS \"reference\",\nencode(data_hash, 'hex') AS \"data_hash\",\nencode(dat.bytes, 'hex') AS \"inline_datum\",\nnull AS \"reference_script_hash\"\nFROM tx\nJOIN tx_in txi ON (txi.tx_in_id = tx.id)\nJOIN tx_out txo ON (\ntxo.tx_id = txi.tx_out_id\nAND txo.index = txi.tx_out_index\n)\nJOIN tx tx2 ON (txi.tx_out_id = tx2.id)\nLEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)\nWHERE encode(tx.hash, 'hex') = $1\n\nUNION ALL\nSELECT rtxi.id AS \"tx_in_id\",\ntxo.address AS \"address\",\nencode(tx2.hash, 'hex') AS \"tx_hash\", -- output hash of previous UTxO\nrtxi.tx_out_index AS \"output_index\", -- output index of previous UTxO\n(\nSELECT array_agg(obj)\nFROM (\nSELECT json_build_object(\n'unit', 'lovelace',\n'quantity', txo.value::TEXT\n)\nUNION ALL\nSELECT json_build_object(\n'unit', CONCAT(encode(ma.policy, 'hex'), encode(ma.name, 'hex')),\n'quantity', mto.quantity::TEXT\n)\nFROM ma_tx_out mto\nJOIN multi_asset ma ON (mto.ident = ma.id)\nWHERE mto.tx_out_id = txo.id\n) t(obj)\n) as \"amount\",\nfalse AS \"collateral\",\ntrue AS \"reference\",\nencode(txo.data_hash, 'hex') AS \"data_hash\",\nencode(dat.bytes, 'hex') AS \"inline_datum\",\nencode(scr.hash, 'hex') AS \"reference_script_hash\"\nFROM tx\nJOIN reference_tx_in rtxi ON (rtxi.tx_in_id = tx.id)\nJOIN tx_out txo ON (\ntxo.tx_id = rtxi.tx_out_id\nAND txo.index = rtxi.tx_out_index\n)\nJOIN tx tx2 ON (rtxi.tx_out_id = tx2.id)\nLEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)\nLEFT JOIN script scr ON (txo.reference_script_id = scr.id)\nWHERE encode(tx.hash, 'hex') = $1\n\nUNION ALL\nSELECT ctxi.id AS \"tx_in_id\",\ntxo.address AS \"address\",\nencode(tx2.hash, 'hex') AS \"tx_hash\", -- output hash of previous utxo\nctxi.tx_out_index AS \"output_index\", -- output index of previous utxo\nARRAY[json_build_object('unit', 'lovelace', 'quantity', txo.value::TEXT)] AS \"amount\",\ntrue AS \"collateral\",\nfalse AS \"reference\",\nencode(txo.data_hash, 'hex') AS \"data_hash\",\nencode(dat.bytes, 'hex') AS \"inline_datum\",\nnull AS \"reference_script_hash\"\nFROM tx\nJOIN collateral_tx_in ctxi ON (ctxi.tx_in_id = tx.id)\nJOIN tx_out txo ON (\ntxo.tx_id = ctxi.tx_out_id\nAND txo.index = ctxi.tx_out_index\n)\nJOIN tx tx2 ON (ctxi.tx_out_id = tx2.id)\nLEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)\nWHERE encode(tx.hash, 'hex') = $1\n) AS \"inputs\"\nORDER BY collateral ASC, (tx_in_id, output_index) ASC;")
