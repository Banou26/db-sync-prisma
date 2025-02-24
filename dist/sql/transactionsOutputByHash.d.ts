import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 */
export const transactionsOutputByHash: (text: string) => $runtime.TypedSql<transactionsOutputByHash.Parameters, transactionsOutputByHash.Result>

export namespace transactionsOutputByHash {
  export type Parameters = [text: string]
  export type Result = {
    address: string | null
    ["amount: Vec<Json<TransactionAmount>>"]: $runtime.JsonValue[] | null
    data_hash: string | null
    inline_datum: string | null
    collateral: boolean | null
    reference_script_hash: string | null
    output_index: number | null
    consumed_by_tx: string | null
  }
}
