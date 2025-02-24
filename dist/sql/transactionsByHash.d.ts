import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const transactionsByHash: (text: string) => $runtime.TypedSql<transactionsByHash.Parameters, transactionsByHash.Result>

export namespace transactionsByHash {
  export type Parameters = [text: string]
  export type Result = {
    ["hash!"]: string
    ["block!"]: string
    ["block_height!"]: number
    ["block_time!"]: number
    ["slot!"]: bigint
    ["index!"]: number
    ["output_amount!: Vec<Json<TransactionAmount>>"]: $runtime.JsonValue[] | null
    ["fees!"]: string
    deposit: string | null
    ["size!"]: number
    invalid_before: string | null
    invalid_hereafter: string | null
    ["valid_contract!"]: boolean
    ["utxo_count!"]: bigint
    ["withdrawal_count!"]: bigint
    ["mir_cert_count!"]: bigint
    ["delegation_count!"]: bigint
    ["stake_cert_count!"]: bigint
    ["pool_update_count!"]: bigint
    ["pool_retire_count!"]: bigint
    ["asset_mint_or_burn_count!"]: bigint
    ["redeemer_count!"]: bigint
  }
}
