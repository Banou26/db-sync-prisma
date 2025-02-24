import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const scriptCborByHash = /*#__PURE__*/ $mkFactory("SELECT encode(bytes, 'hex') AS \"cbor!\"\nFROM datum d\nWHERE encode(d.hash, 'hex') = $1\nUNION\nSELECT encode(bytes, 'hex') AS \"cbor!\"\nFROM redeemer_data rd\nWHERE encode(rd.hash, 'hex') = $1;")
