import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 * @param int8
 * @param int8
 */
export const addresses: (text: string, int8: number | bigint, int8: number | bigint) => $runtime.TypedSql<addresses.Parameters, addresses.Result>

export namespace addresses {
  export type Parameters = [text: string, int8: number | bigint, int8: number | bigint]
  export type Result = {
    ["address!"]: string
    ["quantity!"]: string
  }
}
