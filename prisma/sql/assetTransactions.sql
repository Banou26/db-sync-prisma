SELECT DISTINCT ON (txo.tx_id)
  encode(tx.hash, 'hex') AS "tx_hash!",
  tx.block_index AS "tx_index!",
  b.block_no AS "block_height!",
  extract(
    epoch
    FROM b.time
  )::INTEGER AS "block_time!"
FROM ma_tx_out mto
  JOIN multi_asset ma ON (mto.ident = ma.id)
  JOIN tx_out txo ON (mto.tx_out_id = txo.id)
  JOIN tx ON (txo.tx_id = tx.id)
  JOIN block b ON (b.id = tx.block_id)
WHERE (encode(policy, 'hex') || encode(name, 'hex')) = $1
ORDER BY txo.tx_id ASC
LIMIT $2
OFFSET $3;
