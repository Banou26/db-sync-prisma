import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 */
export const transactionsInputsByHash: (text: string) => $runtime.TypedSql<transactionsInputsByHash.Parameters, transactionsInputsByHash.Result>

export namespace transactionsInputsByHash {
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
