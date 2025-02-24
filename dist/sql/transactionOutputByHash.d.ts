import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const transactionOutputByHash: (text: string) => $runtime.TypedSql<transactionOutputByHash.Parameters, transactionOutputByHash.Result>

export namespace transactionOutputByHash {
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
