"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.assetHistoricalUtxos = /*#__PURE__*/ $mkFactory("SELECT\nencode(tx.hash, 'hex')         AS \"tx_hash\",\ntx_out.index                   AS \"output_index\",\nencode(tx_out.data_hash, 'hex') AS \"data_hash\",\ndatum.value                    AS \"datum_value\",\ntx_out.address                 AS \"address\",\nblock.time                     AS \"time\",\ntx_out.value                   AS \"value\",\nCOALESCE(\njsonb_agg(\nDISTINCT jsonb_build_object(\n'policyId',  encode(multi_asset.policy, 'hex'),\n'assetName', encode(multi_asset.name,  'hex'),\n'quantity',  ma_tx_out.quantity\n)\n),\n'[]'::jsonb\n) AS \"asset_balances\"\nFROM tx\nJOIN block\nON block.id = tx.block_id\nJOIN tx_out\nON tx_out.tx_id = tx.id\n\nLEFT JOIN ma_tx_out\nON ma_tx_out.tx_out_id = tx_out.id\nLEFT JOIN multi_asset\nON multi_asset.id = ma_tx_out.ident\n\nLEFT JOIN datum\nON tx_out.data_hash = datum.hash\n\nWHERE EXISTS (\nSELECT 1\nFROM ma_tx_out sub_mto\nJOIN multi_asset sub_ma\nON sub_ma.id = sub_mto.ident\nWHERE sub_mto.tx_out_id = tx_out.id\nAND (encode(sub_ma.policy, 'hex') || encode(sub_ma.name, 'hex')) = $1\n)\n\nGROUP BY\ntx.id,\ntx_out.index,\ntx_out.data_hash,\ndatum.value,\ntx_out.address,\ntx_out.value,\nblock.time\n\nLIMIT $2\nOFFSET $3;")
