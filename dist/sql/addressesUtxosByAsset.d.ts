import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 * @param bytea
 * @param text
 * @param int8
 * @param int8
 */
export const addressesUtxosByAsset: (text: string, bytea: Uint8Array, text: string, int8: number | bigint, int8: number | bigint) => $runtime.TypedSql<addressesUtxosByAsset.Parameters, addressesUtxosByAsset.Result>

export namespace addressesUtxosByAsset {
  export type Parameters = [text: string, bytea: Uint8Array, text: string, int8: number | bigint, int8: number | bigint]
  export type Result = {
    ["address!"]: string
    ["tx_hash!"]: string
    ["tx_index!"]: number
    ["output_index!"]: number
    ["amount!: Vec<Json<TransactionAmount>>"]: $runtime.JsonValue[] | null
    ["block!"]: string
    data_hash: string | null
    inline_datum: string | null
    reference_script_hash: string | null
  }
}
