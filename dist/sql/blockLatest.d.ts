import * as $runtime from "../runtime/library"

/**
 */
export const blockLatest: () => $runtime.TypedSql<blockLatest.Parameters, blockLatest.Result>

export namespace blockLatest {
  export type Parameters = []
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
