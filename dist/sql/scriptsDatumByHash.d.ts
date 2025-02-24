import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 */
export const scriptsDatumByHash: (text: string) => $runtime.TypedSql<scriptsDatumByHash.Parameters, scriptsDatumByHash.Result>

export namespace scriptsDatumByHash {
  export type Parameters = [text: string]
  export type Result = {
    json_value: $runtime.JsonValue | null
  }
}
