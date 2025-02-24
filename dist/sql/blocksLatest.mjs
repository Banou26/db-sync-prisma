import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const blocksLatest = /*#__PURE__*/ $mkFactory("SELECT extract(\nepoch\nFROM b.time\n)::INTEGER AS \"time!\",\nb.block_no AS \"height!\",\nencode(b.hash, 'hex') AS \"hash!\",\nb.slot_no AS \"slot!\",\nb.epoch_no AS \"epoch!\",\nb.epoch_slot_no AS \"epoch_slot!\",\nCASE\nWHEN ph.view IS NULL THEN\nCASE\nWHEN sl.description LIKE '%Key-%' THEN\nREPLACE(sl.description, 'Key-', '-')\nELSE sl.description\nEND\nELSE ph.view\nEND AS \"slot_leader\",\nb.size AS \"size\",\nb.tx_count AS \"tx_count\",\nSUM(tx.out_sum)::TEXT AS \"output\", -- cast to TEXT to avoid number overflow\nSUM(tx.fee)::TEXT AS \"fees\", -- cast to TEXT to avoid number overflow\nb.vrf_key AS \"block_vrf\",\nencode(b.op_cert, 'hex') AS \"op_cert\",\nb.op_cert_counter::TEXT AS \"op_cert_counter\", -- cast to TEXT to avoid number overflow\n(\nSELECT encode(hash, 'hex')\nFROM block\nWHERE id = b.previous_id\n) AS \"previous_block\",\nnull as \"next_block\",\n0 as \"confirmations\"\nFROM block b\nLEFT JOIN tx ON (tx.block_id = b.id)\nJOIN slot_leader sl ON (sl.id = b.slot_leader_id)\nLEFT JOIN pool_hash ph ON (ph.id = sl.pool_hash_id)\nWHERE b.id = (\nSELECT MAX(id)\nFROM block\n)\nGROUP BY b.id,\nsl.id,\nph.id\nORDER BY b.id DESC\nLIMIT 1;")
