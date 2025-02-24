import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const assetsByPolicyId: (text: string) => $runtime.TypedSql<assetsByPolicyId.Parameters, assetsByPolicyId.Result>

export namespace assetsByPolicyId {
  export type Parameters = [text: string]
  export type Result = {
    ["asset!"]: string
    ["quantity!"]: string
  }
}
