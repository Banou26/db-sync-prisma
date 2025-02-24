import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const assetByPolicyId: (text: string) => $runtime.TypedSql<assetByPolicyId.Parameters, assetByPolicyId.Result>

export namespace assetByPolicyId {
  export type Parameters = [text: string]
  export type Result = {
    ["asset!"]: string
    ["quantity!"]: string
  }
}
