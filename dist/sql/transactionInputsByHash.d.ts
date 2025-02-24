import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const transactionInputsByHash: (text: string) => $runtime.TypedSql<transactionInputsByHash.Parameters, transactionInputsByHash.Result>

export namespace transactionInputsByHash {
  export type Parameters = [text: string]
  export type Result = {
    tx_in_id: bigint | null
    address: string | null
    tx_hash: string | null
    output_index: number | null
    ["amount: Vec<Json<TransactionAmount>>"]: $runtime.JsonValue[] | null
    collateral: boolean | null
    reference: boolean | null
    data_hash: string | null
    inline_datum: string | null
    reference_script_hash: string | null
  }
}
