import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const scriptDatumByHash: (text: string) => $runtime.TypedSql<scriptDatumByHash.Parameters, scriptDatumByHash.Result>

export namespace scriptDatumByHash {
  export type Parameters = [text: string]
  export type Result = {
    json_value: $runtime.JsonValue | null
  }
}
