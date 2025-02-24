SELECT
    -- Basic UTxO info
    encode(tx.hash, 'hex')         AS "tx_hash",
    tx_out.index                   AS "output_index",
    encode(tx_out.data_hash, 'hex') AS "data_hash",
    -- The actual datum contents from the 'datum' table, if present
    datum.value                    AS "datum_value",
    -- Address and block time
    tx_out.address                 AS "address",
    block.time                     AS "time",
    -- Lovelace in this UTxO (the integer amount of ADA in lovelace)
    tx_out.value                   AS "value",
    -- All multi-assets in this UTxO
    COALESCE(
      jsonb_agg(
        DISTINCT jsonb_build_object(
          'policyId',  encode(multi_asset.policy, 'hex'),
          'assetName', encode(multi_asset.name,  'hex'),
          'quantity',  ma_tx_out.quantity
        )
      ),
      '[]'::jsonb
    ) AS "asset_balances"
FROM tx
JOIN block
    ON block.id = tx.block_id
JOIN tx_out
    ON tx_out.tx_id = tx.id

-- Bring in multi-asset info (for asset_balances)
LEFT JOIN ma_tx_out
    ON ma_tx_out.tx_out_id = tx_out.id
LEFT JOIN multi_asset
    ON multi_asset.id = ma_tx_out.ident

-- Join the 'datum' table to fetch the actual datum content
LEFT JOIN datum
    ON tx_out.data_hash = datum.hash

-- Only outputs that contain the specified policy+asset name
WHERE EXISTS (
    SELECT 1
      FROM ma_tx_out sub_mto
      JOIN multi_asset sub_ma
        ON sub_ma.id = sub_mto.ident
    WHERE sub_mto.tx_out_id = tx_out.id
      AND (encode(sub_ma.policy, 'hex') || encode(sub_ma.name, 'hex')) = $1
)

GROUP BY 
    tx.id,
    tx_out.index,
    tx_out.data_hash,
    datum.value,
    tx_out.address,
    tx_out.value,
    block.time

LIMIT $2
OFFSET $3;
