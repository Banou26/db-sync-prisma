import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const scriptsCborByHash: (text: string) => $runtime.TypedSql<scriptsCborByHash.Parameters, scriptsCborByHash.Result>

export namespace scriptsCborByHash {
  export type Parameters = [text: string]
  export type Result = {
    ["cbor!"]: string
  }
}
