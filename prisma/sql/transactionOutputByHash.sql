SELECT *
FROM (
    -- Normal outputs
    SELECT
      txo.address AS "address",
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
      ) as "amount: Vec<Json<TransactionAmount>>",
      encode(txo.data_hash, 'hex') AS "data_hash",
      encode(dat.bytes, 'hex') AS "inline_datum",
      false AS "collateral",
      encode(scr.hash, 'hex') AS "reference_script_hash",
      txo.index AS "output_index",
      (
        SELECT encode(tx.hash, 'hex')
        FROM tx WHERE tx.id = txo.consumed_by_tx_id
      ) AS "consumed_by_tx"
    FROM tx
      JOIN tx_out txo ON (txo.tx_id = tx.id)
      LEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)
      LEFT JOIN script scr ON (txo.reference_script_id = scr.id)
    WHERE encode(tx.hash, 'hex') = $1

    -- Collateral outputs
    UNION ALL
    SELECT
      txo.address AS "address",
      ARRAY[json_build_object('unit', 'lovelace', 'quantity', txo.value::TEXT)] AS "amount",
      encode(txo.data_hash, 'hex') AS "data_hash",
      encode(dat.bytes, 'hex') AS "inline_datum",
      true AS "collateral",
      encode(scr.hash, 'hex') AS "reference_script_hash",
      txo.index AS "output_index",
      NULL as "consumed_by_tx"
    FROM tx
      JOIN collateral_tx_out txo ON (txo.tx_id = tx.id)
      LEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)
      LEFT JOIN script scr ON (txo.reference_script_id = scr.id)
    WHERE encode(tx.hash, 'hex') = $1
  ) AS "outputs"
ORDER BY (output_index, collateral) ASC;
