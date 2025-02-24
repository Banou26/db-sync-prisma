import * as $runtime from "../runtime/library"

/**
 * @param text
 * @param int8
 * @param int8
 */
export const assetsTransactions: (text: string, int8: number | bigint, int8: number | bigint) => $runtime.TypedSql<assetsTransactions.Parameters, assetsTransactions.Result>

export namespace assetsTransactions {
  export type Parameters = [text: string, int8: number | bigint, int8: number | bigint]
  export type Result = {
    ["tx_hash!"]: string
    ["tx_index!"]: number
    ["block_height!"]: number
    ["block_time!"]: number
  }
}
