import * as $runtime from "../runtime/library"

/**
 * @param text
 * @param int8
 * @param int8
 */
export const assetAddresses: (text: string, int8: number | bigint, int8: number | bigint) => $runtime.TypedSql<assetAddresses.Parameters, assetAddresses.Result>

export namespace assetAddresses {
  export type Parameters = [text: string, int8: number | bigint, int8: number | bigint]
  export type Result = {
    ["address!"]: string
    ["quantity!"]: string
  }
}
