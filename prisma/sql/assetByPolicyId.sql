SELECT
  asset AS "asset!",
  quantity::TEXT AS "quantity!" -- cast to TEXT to avoid number overflow
FROM (
  SELECT MIN(ma_tx_mint.id),
    CONCAT(encode(multi_asset.policy, 'hex'), encode(multi_asset.name, 'hex')) AS "asset",
    SUM(quantity) AS "quantity"
  FROM ma_tx_mint
    JOIN multi_asset ON (ma_tx_mint.ident = multi_asset.id)
  WHERE encode(policy, 'hex') = $1
  GROUP BY policy, name
  ORDER BY MIN(ma_tx_mint.id) ASC
) AS "ordered assets";
