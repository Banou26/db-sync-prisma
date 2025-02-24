import { makeTypedQueryFactory as $mkFactory } from "@prisma/client/runtime/library"
export const scriptsDatumByHash = /*#__PURE__*/ $mkFactory("SELECT value AS \"json_value\"\nFROM datum d\nWHERE encode(d.hash, 'hex') = $1\nUNION\nSELECT value AS \"json_value\"\nFROM redeemer_data rd\nWHERE encode(rd.hash, 'hex') = $1;")
