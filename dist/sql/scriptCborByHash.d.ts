import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const scriptCborByHash: (text: string) => $runtime.TypedSql<scriptCborByHash.Parameters, scriptCborByHash.Result>

export namespace scriptCborByHash {
  export type Parameters = [text: string]
  export type Result = {
    ["cbor!"]: string
  }
}
