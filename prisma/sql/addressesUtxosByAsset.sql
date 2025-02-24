SELECT 
  txo.address AS "address!",
  encode(tx.hash, 'hex') AS "tx_hash!",
  txo.index AS "tx_index!",
  txo.index AS "output_index!",
  (
    SELECT array_agg(obj)
    FROM (
      SELECT json_build_object(
        'unit', 'lovelace',
        'quantity', txo.value::TEXT
      )
      UNION ALL
      SELECT json_build_object(
        'unit', CONCAT(encode(ma.policy, 'hex'), encode(ma.name, 'hex')),
        'quantity', mto.quantity::TEXT
      )
      FROM ma_tx_out mto
        JOIN multi_asset ma ON (mto.ident = ma.id)
      WHERE mto.tx_out_id = txo.id
    ) t(obj)
  ) as "amount!: Vec<Json<TransactionAmount>>",
  encode(block.hash, 'hex') AS "block!",
  encode(data_hash, 'hex') AS "data_hash",
  encode(datum.bytes, 'hex') AS "inline_datum",
  encode(script.hash, 'hex') AS "reference_script_hash"
FROM tx
  JOIN tx_out txo ON (tx.id = txo.tx_id)
  LEFT JOIN ma_tx_out ma_txo ON (ma_txo.tx_out_id = txo.id)
  LEFT JOIN multi_asset ma ON (ma_txo.ident = ma.id)
  JOIN block ON (block.id = tx.block_id)
  LEFT JOIN datum ON (txo.inline_datum_id = datum.id)
  LEFT JOIN script ON (txo.reference_script_id = script.id)
WHERE
  txo.consumed_by_tx_id IS NULL
  AND (
    CASE
      WHEN $2::BYTEA IS NOT NULL THEN txo.payment_cred = $2
      ELSE txo.address = $1
    END
  )
  AND (
    CASE
      WHEN LOWER($3) <> 'lovelace' THEN (
        encode(ma.policy, 'hex') || encode(ma.name, 'hex')
      ) = $3
      ELSE ma_txo IS NULL
    END
  )
ORDER BY block.slot_no, txo.index ASC
LIMIT $4
OFFSET $5;
