import * as $runtime from "@prisma/client/runtime/library"

/**
 * @param text
 */
export const blockByHashOrNumber: (text: string) => $runtime.TypedSql<blockByHashOrNumber.Parameters, blockByHashOrNumber.Result>

export namespace blockByHashOrNumber {
  export type Parameters = [text: string]
  export type Result = {
    ["time!"]: number
    ["height!"]: number
    ["hash!"]: string
    ["slot!"]: bigint
    ["epoch!"]: number
    ["epoch_slot!"]: number
    slot_leader: string | null
    size: number
    tx_count: bigint
    output: string | null
    fees: string | null
    block_vrf: string | null
    op_cert: string | null
    op_cert_counter: string | null
    previous_block: string | null
    next_block: string | null
    confirmations: number | null
  }
}
