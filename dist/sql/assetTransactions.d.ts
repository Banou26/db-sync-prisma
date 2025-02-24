import * as $runtime from "../runtime/library"

/**
 * @param text
 * @param int8
 * @param int8
 */
export const assetTransactions: (text: string, int8: number | bigint, int8: number | bigint) => $runtime.TypedSql<assetTransactions.Parameters, assetTransactions.Result>

export namespace assetTransactions {
  export type Parameters = [text: string, int8: number | bigint, int8: number | bigint]
  export type Result = {
    ["tx_hash!"]: string
    ["tx_index!"]: number
    ["block_height!"]: number
    ["block_time!"]: number
  }
}
