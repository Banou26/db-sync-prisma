import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 * @param int8
 * @param int8
 */
export const assetsHistoricalUtxos: (text: string, int8: number | bigint, int8: number | bigint) => $runtime.TypedSql<assetsHistoricalUtxos.Parameters, assetsHistoricalUtxos.Result>

export namespace assetsHistoricalUtxos {
  export type Parameters = [text: string, int8: number | bigint, int8: number | bigint]
  export type Result = {
    tx_hash: string | null
    output_index: number
    data_hash: string | null
    datum_value: $runtime.JsonValue | null
    address: string
    time: Date
    value: $runtime.Decimal
    asset_balances: $runtime.JsonValue | null
  }
}
