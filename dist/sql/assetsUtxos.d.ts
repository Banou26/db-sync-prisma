import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 * @param int8
 * @param int8
 */
export const assetsUtxos: (text: string, int8: number | bigint, int8: number | bigint) => $runtime.TypedSql<assetsUtxos.Parameters, assetsUtxos.Result>

export namespace assetsUtxos {
  export type Parameters = [text: string, int8: number | bigint, int8: number | bigint]
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
