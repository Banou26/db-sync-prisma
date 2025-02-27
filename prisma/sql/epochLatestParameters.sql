SELECT
  epoch_no AS "epoch!",
  min_fee_a AS "min_fee_a!",
  min_fee_b AS "min_fee_b!",
  max_block_size AS "max_block_size!",
  max_tx_size AS "max_tx_size!",
  max_bh_size AS "max_block_header_size!",
  key_deposit::TEXT AS "key_deposit!",
  -- cast to TEXT to avoid number overflow
  pool_deposit::TEXT AS "pool_deposit!",
  -- cast to TEXT to avoid number overflow
  max_epoch AS "e_max!",
  optimal_pool_count AS "n_opt!",
  influence AS "a0!",
  monetary_expand_rate AS "rho!",
  treasury_growth_rate AS "tau!",
  decentralisation AS "decentralisation_param!",
  extra_entropy AS "extra_entropy",
  protocol_major AS "protocol_major_ver!",
  protocol_minor AS "protocol_minor_ver!",
  COALESCE(coins_per_utxo_size, min_utxo_value)::TEXT AS "min_utxo",
  -- cast to TEXT to avoid number overflow
  encode(nonce, 'hex') AS "nonce",
  -- TODO: how can we get sqlx to not complain about using null here?
  json_build_object('foo', 'bar') AS "cost_models",
  cm.costs AS "cost_models_raw",
  price_mem AS "price_mem",
  price_step AS "price_step",
  max_tx_ex_mem::TEXT AS "max_tx_ex_mem",
  -- cast to TEXT to avoid number overflow
  max_tx_ex_steps::TEXT AS "max_tx_ex_steps",
  -- cast to TEXT to avoid number overflow
  max_block_ex_mem::TEXT AS "max_block_ex_mem",
  -- cast to TEXT to avoid number overflow
  max_block_ex_steps::TEXT AS "max_block_ex_steps",
  -- cast to TEXT to avoid number overflow
  max_val_size::TEXT AS "max_val_size",
  -- cast to TEXT to avoid number overflow
  collateral_percent AS "collateral_percent",
  max_collateral_inputs AS "max_collateral_inputs",
  coins_per_utxo_size::TEXT AS "coins_per_utxo_size",
  -- cast to TEXT to avoid number overflow
  committee_min_size::TEXT AS "committee_min_size",
  committee_max_term_length::TEXT AS "committee_max_term_length",
  gov_action_lifetime::TEXT AS "gov_action_lifetime",
  gov_action_deposit::TEXT AS "gov_action_deposit",
  drep_deposit::TEXT AS "drep_deposit",
  drep_activity::TEXT AS "drep_activity",
  min_fee_ref_script_cost_per_byte AS "min_fee_ref_script_cost_per_byte"
FROM epoch_param ep
  LEFT JOIN cost_model cm ON (ep.cost_model_id = cm.id)
WHERE epoch_no = (
    SELECT MAX(no)
    FROM epoch
  );
