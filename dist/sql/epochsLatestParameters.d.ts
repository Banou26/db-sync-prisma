import * as $runtime from "@prisma/client/runtime/library"

/**
 */
export const epochsLatestParameters: () => $runtime.TypedSql<epochsLatestParameters.Parameters, epochsLatestParameters.Result>

export namespace epochsLatestParameters {
  export type Parameters = []
  export type Result = {
    ["epoch!"]: number
    ["min_fee_a!"]: number
    ["min_fee_b!"]: number
    ["max_block_size!"]: number
    ["max_tx_size!"]: number
    ["max_block_header_size!"]: number
    ["key_deposit!"]: string
    ["pool_deposit!"]: string
    ["e_max!"]: number
    ["n_opt!"]: number
    ["a0!"]: number
    ["rho!"]: number
    ["tau!"]: number
    ["decentralisation_param!"]: number
    extra_entropy: Uint8Array | null
    ["protocol_major_ver!"]: number
    ["protocol_minor_ver!"]: number
    min_utxo: string | null
    nonce: string | null
    cost_models: $runtime.JsonValue | null
    cost_models_raw: $runtime.JsonValue | null
    price_mem: number | null
    price_step: number | null
    max_tx_ex_mem: string | null
    max_tx_ex_steps: string | null
    max_block_ex_mem: string | null
    max_block_ex_steps: string | null
    max_val_size: string | null
    collateral_percent: number | null
    max_collateral_inputs: number | null
    coins_per_utxo_size: string | null
    committee_min_size: string | null
    committee_max_term_length: string | null
    gov_action_lifetime: string | null
    gov_action_deposit: string | null
    drep_deposit: string | null
    drep_activity: string | null
    min_fee_ref_script_cost_per_byte: number | null
  }
}
