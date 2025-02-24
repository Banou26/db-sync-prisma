
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Ada_potsScalarFieldEnum = {
  id: 'id',
  slot_no: 'slot_no',
  epoch_no: 'epoch_no',
  treasury: 'treasury',
  reserves: 'reserves',
  rewards: 'rewards',
  utxo: 'utxo',
  deposits_stake: 'deposits_stake',
  fees: 'fees',
  block_id: 'block_id',
  deposits_drep: 'deposits_drep',
  deposits_proposal: 'deposits_proposal'
};

exports.Prisma.BlockScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  epoch_no: 'epoch_no',
  slot_no: 'slot_no',
  epoch_slot_no: 'epoch_slot_no',
  block_no: 'block_no',
  previous_id: 'previous_id',
  slot_leader_id: 'slot_leader_id',
  size: 'size',
  time: 'time',
  tx_count: 'tx_count',
  proto_major: 'proto_major',
  proto_minor: 'proto_minor',
  vrf_key: 'vrf_key',
  op_cert: 'op_cert',
  op_cert_counter: 'op_cert_counter'
};

exports.Prisma.Collateral_tx_inScalarFieldEnum = {
  id: 'id',
  tx_in_id: 'tx_in_id',
  tx_out_id: 'tx_out_id',
  tx_out_index: 'tx_out_index'
};

exports.Prisma.Collateral_tx_outScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  index: 'index',
  address: 'address',
  address_has_script: 'address_has_script',
  payment_cred: 'payment_cred',
  stake_address_id: 'stake_address_id',
  value: 'value',
  data_hash: 'data_hash',
  multi_assets_descr: 'multi_assets_descr',
  inline_datum_id: 'inline_datum_id',
  reference_script_id: 'reference_script_id'
};

exports.Prisma.CommitteeScalarFieldEnum = {
  id: 'id',
  gov_action_proposal_id: 'gov_action_proposal_id',
  quorum_numerator: 'quorum_numerator',
  quorum_denominator: 'quorum_denominator'
};

exports.Prisma.Committee_de_registrationScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  cert_index: 'cert_index',
  voting_anchor_id: 'voting_anchor_id',
  cold_key_id: 'cold_key_id'
};

exports.Prisma.Committee_hashScalarFieldEnum = {
  id: 'id',
  raw: 'raw',
  has_script: 'has_script'
};

exports.Prisma.Committee_memberScalarFieldEnum = {
  id: 'id',
  committee_id: 'committee_id',
  committee_hash_id: 'committee_hash_id',
  expiration_epoch: 'expiration_epoch'
};

exports.Prisma.Committee_registrationScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  cert_index: 'cert_index',
  cold_key_id: 'cold_key_id',
  hot_key_id: 'hot_key_id'
};

exports.Prisma.ConstitutionScalarFieldEnum = {
  id: 'id',
  gov_action_proposal_id: 'gov_action_proposal_id',
  voting_anchor_id: 'voting_anchor_id',
  script_hash: 'script_hash'
};

exports.Prisma.Cost_modelScalarFieldEnum = {
  id: 'id',
  costs: 'costs',
  hash: 'hash'
};

exports.Prisma.DatumScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  tx_id: 'tx_id',
  value: 'value',
  bytes: 'bytes'
};

exports.Prisma.DelegationScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  cert_index: 'cert_index',
  pool_hash_id: 'pool_hash_id',
  active_epoch_no: 'active_epoch_no',
  tx_id: 'tx_id',
  slot_no: 'slot_no',
  redeemer_id: 'redeemer_id'
};

exports.Prisma.Delegation_voteScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  cert_index: 'cert_index',
  drep_hash_id: 'drep_hash_id',
  tx_id: 'tx_id',
  redeemer_id: 'redeemer_id'
};

exports.Prisma.Delisted_poolScalarFieldEnum = {
  id: 'id',
  hash_raw: 'hash_raw'
};

exports.Prisma.Drep_distrScalarFieldEnum = {
  id: 'id',
  hash_id: 'hash_id',
  amount: 'amount',
  epoch_no: 'epoch_no',
  active_until: 'active_until'
};

exports.Prisma.Drep_hashScalarFieldEnum = {
  id: 'id',
  raw: 'raw',
  view: 'view',
  has_script: 'has_script'
};

exports.Prisma.Drep_registrationScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  cert_index: 'cert_index',
  deposit: 'deposit',
  drep_hash_id: 'drep_hash_id',
  voting_anchor_id: 'voting_anchor_id'
};

exports.Prisma.EpochScalarFieldEnum = {
  id: 'id',
  out_sum: 'out_sum',
  fees: 'fees',
  tx_count: 'tx_count',
  blk_count: 'blk_count',
  no: 'no',
  start_time: 'start_time',
  end_time: 'end_time'
};

exports.Prisma.Epoch_paramScalarFieldEnum = {
  id: 'id',
  epoch_no: 'epoch_no',
  min_fee_a: 'min_fee_a',
  min_fee_b: 'min_fee_b',
  max_block_size: 'max_block_size',
  max_tx_size: 'max_tx_size',
  max_bh_size: 'max_bh_size',
  key_deposit: 'key_deposit',
  pool_deposit: 'pool_deposit',
  max_epoch: 'max_epoch',
  optimal_pool_count: 'optimal_pool_count',
  influence: 'influence',
  monetary_expand_rate: 'monetary_expand_rate',
  treasury_growth_rate: 'treasury_growth_rate',
  decentralisation: 'decentralisation',
  protocol_major: 'protocol_major',
  protocol_minor: 'protocol_minor',
  min_utxo_value: 'min_utxo_value',
  min_pool_cost: 'min_pool_cost',
  nonce: 'nonce',
  cost_model_id: 'cost_model_id',
  price_mem: 'price_mem',
  price_step: 'price_step',
  max_tx_ex_mem: 'max_tx_ex_mem',
  max_tx_ex_steps: 'max_tx_ex_steps',
  max_block_ex_mem: 'max_block_ex_mem',
  max_block_ex_steps: 'max_block_ex_steps',
  max_val_size: 'max_val_size',
  collateral_percent: 'collateral_percent',
  max_collateral_inputs: 'max_collateral_inputs',
  block_id: 'block_id',
  extra_entropy: 'extra_entropy',
  coins_per_utxo_size: 'coins_per_utxo_size',
  pvt_motion_no_confidence: 'pvt_motion_no_confidence',
  pvt_committee_normal: 'pvt_committee_normal',
  pvt_committee_no_confidence: 'pvt_committee_no_confidence',
  pvt_hard_fork_initiation: 'pvt_hard_fork_initiation',
  dvt_motion_no_confidence: 'dvt_motion_no_confidence',
  dvt_committee_normal: 'dvt_committee_normal',
  dvt_committee_no_confidence: 'dvt_committee_no_confidence',
  dvt_update_to_constitution: 'dvt_update_to_constitution',
  dvt_hard_fork_initiation: 'dvt_hard_fork_initiation',
  dvt_p_p_network_group: 'dvt_p_p_network_group',
  dvt_p_p_economic_group: 'dvt_p_p_economic_group',
  dvt_p_p_technical_group: 'dvt_p_p_technical_group',
  dvt_p_p_gov_group: 'dvt_p_p_gov_group',
  dvt_treasury_withdrawal: 'dvt_treasury_withdrawal',
  committee_min_size: 'committee_min_size',
  committee_max_term_length: 'committee_max_term_length',
  gov_action_lifetime: 'gov_action_lifetime',
  gov_action_deposit: 'gov_action_deposit',
  drep_deposit: 'drep_deposit',
  drep_activity: 'drep_activity',
  pvtpp_security_group: 'pvtpp_security_group',
  min_fee_ref_script_cost_per_byte: 'min_fee_ref_script_cost_per_byte'
};

exports.Prisma.Epoch_stakeScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  pool_id: 'pool_id',
  amount: 'amount',
  epoch_no: 'epoch_no'
};

exports.Prisma.Epoch_stake_progressScalarFieldEnum = {
  id: 'id',
  epoch_no: 'epoch_no',
  completed: 'completed'
};

exports.Prisma.Epoch_stateScalarFieldEnum = {
  id: 'id',
  committee_id: 'committee_id',
  no_confidence_id: 'no_confidence_id',
  constitution_id: 'constitution_id',
  epoch_no: 'epoch_no'
};

exports.Prisma.Epoch_sync_timeScalarFieldEnum = {
  id: 'id',
  no: 'no',
  seconds: 'seconds',
  state: 'state'
};

exports.Prisma.Event_infoScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  epoch: 'epoch',
  type: 'type',
  explanation: 'explanation'
};

exports.Prisma.Extra_key_witnessScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  tx_id: 'tx_id'
};

exports.Prisma.Extra_migrationsScalarFieldEnum = {
  id: 'id',
  token: 'token',
  description: 'description'
};

exports.Prisma.Gov_action_proposalScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  index: 'index',
  prev_gov_action_proposal: 'prev_gov_action_proposal',
  deposit: 'deposit',
  return_address: 'return_address',
  expiration: 'expiration',
  voting_anchor_id: 'voting_anchor_id',
  type: 'type',
  description: 'description',
  param_proposal: 'param_proposal',
  ratified_epoch: 'ratified_epoch',
  enacted_epoch: 'enacted_epoch',
  dropped_epoch: 'dropped_epoch',
  expired_epoch: 'expired_epoch'
};

exports.Prisma.Ma_tx_mintScalarFieldEnum = {
  id: 'id',
  quantity: 'quantity',
  tx_id: 'tx_id',
  ident: 'ident'
};

exports.Prisma.Ma_tx_outScalarFieldEnum = {
  id: 'id',
  quantity: 'quantity',
  tx_out_id: 'tx_out_id',
  ident: 'ident'
};

exports.Prisma.MetaScalarFieldEnum = {
  id: 'id',
  start_time: 'start_time',
  network_name: 'network_name',
  version: 'version'
};

exports.Prisma.Multi_assetScalarFieldEnum = {
  id: 'id',
  policy: 'policy',
  name: 'name',
  fingerprint: 'fingerprint'
};

exports.Prisma.New_committeeScalarFieldEnum = {
  id: 'id',
  gov_action_proposal_id: 'gov_action_proposal_id',
  deleted_members: 'deleted_members',
  added_members: 'added_members',
  quorum_numerator: 'quorum_numerator',
  quorum_denominator: 'quorum_denominator'
};

exports.Prisma.Off_chain_pool_dataScalarFieldEnum = {
  id: 'id',
  pool_id: 'pool_id',
  ticker_name: 'ticker_name',
  hash: 'hash',
  json: 'json',
  bytes: 'bytes',
  pmr_id: 'pmr_id'
};

exports.Prisma.Off_chain_pool_fetch_errorScalarFieldEnum = {
  id: 'id',
  pool_id: 'pool_id',
  fetch_time: 'fetch_time',
  pmr_id: 'pmr_id',
  fetch_error: 'fetch_error',
  retry_count: 'retry_count'
};

exports.Prisma.Off_chain_vote_authorScalarFieldEnum = {
  id: 'id',
  off_chain_vote_data_id: 'off_chain_vote_data_id',
  name: 'name',
  witness_algorithm: 'witness_algorithm',
  public_key: 'public_key',
  signature: 'signature',
  warning: 'warning'
};

exports.Prisma.Off_chain_vote_dataScalarFieldEnum = {
  id: 'id',
  voting_anchor_id: 'voting_anchor_id',
  hash: 'hash',
  json: 'json',
  bytes: 'bytes',
  warning: 'warning',
  language: 'language',
  comment: 'comment',
  is_valid: 'is_valid'
};

exports.Prisma.Off_chain_vote_drep_dataScalarFieldEnum = {
  id: 'id',
  off_chain_vote_data_id: 'off_chain_vote_data_id',
  payment_address: 'payment_address',
  given_name: 'given_name',
  objectives: 'objectives',
  motivations: 'motivations',
  qualifications: 'qualifications',
  image_url: 'image_url',
  image_hash: 'image_hash'
};

exports.Prisma.Off_chain_vote_external_updateScalarFieldEnum = {
  id: 'id',
  off_chain_vote_data_id: 'off_chain_vote_data_id',
  title: 'title',
  uri: 'uri'
};

exports.Prisma.Off_chain_vote_fetch_errorScalarFieldEnum = {
  id: 'id',
  voting_anchor_id: 'voting_anchor_id',
  fetch_error: 'fetch_error',
  fetch_time: 'fetch_time',
  retry_count: 'retry_count'
};

exports.Prisma.Off_chain_vote_gov_action_dataScalarFieldEnum = {
  id: 'id',
  off_chain_vote_data_id: 'off_chain_vote_data_id',
  title: 'title',
  abstract: 'abstract',
  motivation: 'motivation',
  rationale: 'rationale'
};

exports.Prisma.Off_chain_vote_referenceScalarFieldEnum = {
  id: 'id',
  off_chain_vote_data_id: 'off_chain_vote_data_id',
  label: 'label',
  uri: 'uri',
  hash_digest: 'hash_digest',
  hash_algorithm: 'hash_algorithm'
};

exports.Prisma.Param_proposalScalarFieldEnum = {
  id: 'id',
  epoch_no: 'epoch_no',
  key: 'key',
  min_fee_a: 'min_fee_a',
  min_fee_b: 'min_fee_b',
  max_block_size: 'max_block_size',
  max_tx_size: 'max_tx_size',
  max_bh_size: 'max_bh_size',
  key_deposit: 'key_deposit',
  pool_deposit: 'pool_deposit',
  max_epoch: 'max_epoch',
  optimal_pool_count: 'optimal_pool_count',
  influence: 'influence',
  monetary_expand_rate: 'monetary_expand_rate',
  treasury_growth_rate: 'treasury_growth_rate',
  decentralisation: 'decentralisation',
  entropy: 'entropy',
  protocol_major: 'protocol_major',
  protocol_minor: 'protocol_minor',
  min_utxo_value: 'min_utxo_value',
  min_pool_cost: 'min_pool_cost',
  cost_model_id: 'cost_model_id',
  price_mem: 'price_mem',
  price_step: 'price_step',
  max_tx_ex_mem: 'max_tx_ex_mem',
  max_tx_ex_steps: 'max_tx_ex_steps',
  max_block_ex_mem: 'max_block_ex_mem',
  max_block_ex_steps: 'max_block_ex_steps',
  max_val_size: 'max_val_size',
  collateral_percent: 'collateral_percent',
  max_collateral_inputs: 'max_collateral_inputs',
  registered_tx_id: 'registered_tx_id',
  coins_per_utxo_size: 'coins_per_utxo_size',
  pvt_motion_no_confidence: 'pvt_motion_no_confidence',
  pvt_committee_normal: 'pvt_committee_normal',
  pvt_committee_no_confidence: 'pvt_committee_no_confidence',
  pvt_hard_fork_initiation: 'pvt_hard_fork_initiation',
  dvt_motion_no_confidence: 'dvt_motion_no_confidence',
  dvt_committee_normal: 'dvt_committee_normal',
  dvt_committee_no_confidence: 'dvt_committee_no_confidence',
  dvt_update_to_constitution: 'dvt_update_to_constitution',
  dvt_hard_fork_initiation: 'dvt_hard_fork_initiation',
  dvt_p_p_network_group: 'dvt_p_p_network_group',
  dvt_p_p_economic_group: 'dvt_p_p_economic_group',
  dvt_p_p_technical_group: 'dvt_p_p_technical_group',
  dvt_p_p_gov_group: 'dvt_p_p_gov_group',
  dvt_treasury_withdrawal: 'dvt_treasury_withdrawal',
  committee_min_size: 'committee_min_size',
  committee_max_term_length: 'committee_max_term_length',
  gov_action_lifetime: 'gov_action_lifetime',
  gov_action_deposit: 'gov_action_deposit',
  drep_deposit: 'drep_deposit',
  drep_activity: 'drep_activity',
  pvtpp_security_group: 'pvtpp_security_group',
  min_fee_ref_script_cost_per_byte: 'min_fee_ref_script_cost_per_byte'
};

exports.Prisma.Pool_hashScalarFieldEnum = {
  id: 'id',
  hash_raw: 'hash_raw',
  view: 'view'
};

exports.Prisma.Pool_metadata_refScalarFieldEnum = {
  id: 'id',
  pool_id: 'pool_id',
  url: 'url',
  hash: 'hash',
  registered_tx_id: 'registered_tx_id'
};

exports.Prisma.Pool_ownerScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  pool_update_id: 'pool_update_id'
};

exports.Prisma.Pool_relayScalarFieldEnum = {
  id: 'id',
  update_id: 'update_id',
  ipv4: 'ipv4',
  ipv6: 'ipv6',
  dns_name: 'dns_name',
  dns_srv_name: 'dns_srv_name',
  port: 'port'
};

exports.Prisma.Pool_retireScalarFieldEnum = {
  id: 'id',
  hash_id: 'hash_id',
  cert_index: 'cert_index',
  announced_tx_id: 'announced_tx_id',
  retiring_epoch: 'retiring_epoch'
};

exports.Prisma.Pool_statScalarFieldEnum = {
  id: 'id',
  pool_hash_id: 'pool_hash_id',
  epoch_no: 'epoch_no',
  number_of_blocks: 'number_of_blocks',
  number_of_delegators: 'number_of_delegators',
  stake: 'stake',
  voting_power: 'voting_power'
};

exports.Prisma.Pool_updateScalarFieldEnum = {
  id: 'id',
  hash_id: 'hash_id',
  cert_index: 'cert_index',
  vrf_key_hash: 'vrf_key_hash',
  pledge: 'pledge',
  active_epoch_no: 'active_epoch_no',
  meta_id: 'meta_id',
  margin: 'margin',
  fixed_cost: 'fixed_cost',
  registered_tx_id: 'registered_tx_id',
  reward_addr_id: 'reward_addr_id',
  deposit: 'deposit'
};

exports.Prisma.Pot_transferScalarFieldEnum = {
  id: 'id',
  cert_index: 'cert_index',
  treasury: 'treasury',
  reserves: 'reserves',
  tx_id: 'tx_id'
};

exports.Prisma.RedeemerScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  unit_mem: 'unit_mem',
  unit_steps: 'unit_steps',
  fee: 'fee',
  purpose: 'purpose',
  index: 'index',
  script_hash: 'script_hash',
  redeemer_data_id: 'redeemer_data_id'
};

exports.Prisma.Redeemer_dataScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  tx_id: 'tx_id',
  value: 'value',
  bytes: 'bytes'
};

exports.Prisma.Reference_tx_inScalarFieldEnum = {
  id: 'id',
  tx_in_id: 'tx_in_id',
  tx_out_id: 'tx_out_id',
  tx_out_index: 'tx_out_index'
};

exports.Prisma.ReserveScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  cert_index: 'cert_index',
  amount: 'amount',
  tx_id: 'tx_id'
};

exports.Prisma.Reserved_pool_tickerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  pool_hash: 'pool_hash'
};

exports.Prisma.Reverse_indexScalarFieldEnum = {
  id: 'id',
  block_id: 'block_id',
  min_ids: 'min_ids'
};

exports.Prisma.RewardScalarFieldEnum = {
  addr_id: 'addr_id',
  type: 'type',
  amount: 'amount',
  spendable_epoch: 'spendable_epoch',
  pool_id: 'pool_id',
  earned_epoch: 'earned_epoch'
};

exports.Prisma.Schema_versionScalarFieldEnum = {
  id: 'id',
  stage_one: 'stage_one',
  stage_two: 'stage_two',
  stage_three: 'stage_three'
};

exports.Prisma.ScriptScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  hash: 'hash',
  type: 'type',
  json: 'json',
  bytes: 'bytes',
  serialised_size: 'serialised_size'
};

exports.Prisma.Slot_leaderScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  pool_hash_id: 'pool_hash_id',
  description: 'description'
};

exports.Prisma.Stake_addressScalarFieldEnum = {
  id: 'id',
  hash_raw: 'hash_raw',
  view: 'view',
  script_hash: 'script_hash'
};

exports.Prisma.Stake_deregistrationScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  cert_index: 'cert_index',
  epoch_no: 'epoch_no',
  tx_id: 'tx_id',
  redeemer_id: 'redeemer_id'
};

exports.Prisma.Stake_registrationScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  cert_index: 'cert_index',
  epoch_no: 'epoch_no',
  tx_id: 'tx_id',
  deposit: 'deposit'
};

exports.Prisma.TreasuryScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  cert_index: 'cert_index',
  amount: 'amount',
  tx_id: 'tx_id'
};

exports.Prisma.Treasury_withdrawalScalarFieldEnum = {
  id: 'id',
  gov_action_proposal_id: 'gov_action_proposal_id',
  stake_address_id: 'stake_address_id',
  amount: 'amount'
};

exports.Prisma.TxScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  block_id: 'block_id',
  block_index: 'block_index',
  out_sum: 'out_sum',
  fee: 'fee',
  deposit: 'deposit',
  size: 'size',
  invalid_before: 'invalid_before',
  invalid_hereafter: 'invalid_hereafter',
  valid_contract: 'valid_contract',
  script_size: 'script_size',
  treasury_donation: 'treasury_donation'
};

exports.Prisma.Tx_cborScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  bytes: 'bytes'
};

exports.Prisma.Tx_inScalarFieldEnum = {
  id: 'id',
  tx_in_id: 'tx_in_id',
  tx_out_id: 'tx_out_id',
  tx_out_index: 'tx_out_index',
  redeemer_id: 'redeemer_id'
};

exports.Prisma.Tx_metadataScalarFieldEnum = {
  id: 'id',
  key: 'key',
  json: 'json',
  bytes: 'bytes',
  tx_id: 'tx_id'
};

exports.Prisma.Tx_outScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  index: 'index',
  address: 'address',
  address_has_script: 'address_has_script',
  payment_cred: 'payment_cred',
  stake_address_id: 'stake_address_id',
  value: 'value',
  data_hash: 'data_hash',
  inline_datum_id: 'inline_datum_id',
  reference_script_id: 'reference_script_id',
  consumed_by_tx_id: 'consumed_by_tx_id'
};

exports.Prisma.Voting_anchorScalarFieldEnum = {
  id: 'id',
  url: 'url',
  data_hash: 'data_hash',
  type: 'type',
  block_id: 'block_id'
};

exports.Prisma.Voting_procedureScalarFieldEnum = {
  id: 'id',
  tx_id: 'tx_id',
  index: 'index',
  gov_action_proposal_id: 'gov_action_proposal_id',
  voter_role: 'voter_role',
  drep_voter: 'drep_voter',
  pool_voter: 'pool_voter',
  vote: 'vote',
  voting_anchor_id: 'voting_anchor_id',
  committee_voter: 'committee_voter',
  invalid: 'invalid'
};

exports.Prisma.WithdrawalScalarFieldEnum = {
  id: 'id',
  addr_id: 'addr_id',
  amount: 'amount',
  redeemer_id: 'redeemer_id',
  tx_id: 'tx_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.anchortype = exports.$Enums.anchortype = {
  gov_action: 'gov_action',
  drep: 'drep',
  other: 'other',
  vote: 'vote',
  committee_dereg: 'committee_dereg',
  constitution: 'constitution'
};

exports.govactiontype = exports.$Enums.govactiontype = {
  ParameterChange: 'ParameterChange',
  HardForkInitiation: 'HardForkInitiation',
  TreasuryWithdrawals: 'TreasuryWithdrawals',
  NoConfidence: 'NoConfidence',
  NewCommittee: 'NewCommittee',
  NewConstitution: 'NewConstitution',
  InfoAction: 'InfoAction'
};

exports.rewardtype = exports.$Enums.rewardtype = {
  leader: 'leader',
  member: 'member',
  reserves: 'reserves',
  treasury: 'treasury',
  refund: 'refund',
  proposal_refund: 'proposal_refund'
};

exports.scriptpurposetype = exports.$Enums.scriptpurposetype = {
  spend: 'spend',
  mint: 'mint',
  cert: 'cert',
  reward: 'reward',
  vote: 'vote',
  propose: 'propose'
};

exports.scripttype = exports.$Enums.scripttype = {
  multisig: 'multisig',
  timelock: 'timelock',
  plutusV1: 'plutusV1',
  plutusV2: 'plutusV2',
  plutusV3: 'plutusV3'
};

exports.syncstatetype = exports.$Enums.syncstatetype = {
  lagging: 'lagging',
  following: 'following'
};

exports.vote = exports.$Enums.vote = {
  Yes: 'Yes',
  No: 'No',
  Abstain: 'Abstain'
};

exports.voterrole = exports.$Enums.voterrole = {
  ConstitutionalCommittee: 'ConstitutionalCommittee',
  DRep: 'DRep',
  SPO: 'SPO'
};

exports.Prisma.ModelName = {
  ada_pots: 'ada_pots',
  block: 'block',
  collateral_tx_in: 'collateral_tx_in',
  collateral_tx_out: 'collateral_tx_out',
  committee: 'committee',
  committee_de_registration: 'committee_de_registration',
  committee_hash: 'committee_hash',
  committee_member: 'committee_member',
  committee_registration: 'committee_registration',
  constitution: 'constitution',
  cost_model: 'cost_model',
  datum: 'datum',
  delegation: 'delegation',
  delegation_vote: 'delegation_vote',
  delisted_pool: 'delisted_pool',
  drep_distr: 'drep_distr',
  drep_hash: 'drep_hash',
  drep_registration: 'drep_registration',
  epoch: 'epoch',
  epoch_param: 'epoch_param',
  epoch_stake: 'epoch_stake',
  epoch_stake_progress: 'epoch_stake_progress',
  epoch_state: 'epoch_state',
  epoch_sync_time: 'epoch_sync_time',
  event_info: 'event_info',
  extra_key_witness: 'extra_key_witness',
  extra_migrations: 'extra_migrations',
  gov_action_proposal: 'gov_action_proposal',
  ma_tx_mint: 'ma_tx_mint',
  ma_tx_out: 'ma_tx_out',
  meta: 'meta',
  multi_asset: 'multi_asset',
  new_committee: 'new_committee',
  off_chain_pool_data: 'off_chain_pool_data',
  off_chain_pool_fetch_error: 'off_chain_pool_fetch_error',
  off_chain_vote_author: 'off_chain_vote_author',
  off_chain_vote_data: 'off_chain_vote_data',
  off_chain_vote_drep_data: 'off_chain_vote_drep_data',
  off_chain_vote_external_update: 'off_chain_vote_external_update',
  off_chain_vote_fetch_error: 'off_chain_vote_fetch_error',
  off_chain_vote_gov_action_data: 'off_chain_vote_gov_action_data',
  off_chain_vote_reference: 'off_chain_vote_reference',
  param_proposal: 'param_proposal',
  pool_hash: 'pool_hash',
  pool_metadata_ref: 'pool_metadata_ref',
  pool_owner: 'pool_owner',
  pool_relay: 'pool_relay',
  pool_retire: 'pool_retire',
  pool_stat: 'pool_stat',
  pool_update: 'pool_update',
  pot_transfer: 'pot_transfer',
  redeemer: 'redeemer',
  redeemer_data: 'redeemer_data',
  reference_tx_in: 'reference_tx_in',
  reserve: 'reserve',
  reserved_pool_ticker: 'reserved_pool_ticker',
  reverse_index: 'reverse_index',
  reward: 'reward',
  schema_version: 'schema_version',
  script: 'script',
  slot_leader: 'slot_leader',
  stake_address: 'stake_address',
  stake_deregistration: 'stake_deregistration',
  stake_registration: 'stake_registration',
  treasury: 'treasury',
  treasury_withdrawal: 'treasury_withdrawal',
  tx: 'tx',
  tx_cbor: 'tx_cbor',
  tx_in: 'tx_in',
  tx_metadata: 'tx_metadata',
  tx_out: 'tx_out',
  voting_anchor: 'voting_anchor',
  voting_procedure: 'voting_procedure',
  withdrawal: 'withdrawal'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\dev\\fkn-cardano\\db-sync-prisma\\dist",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "typedSql"
    ],
    "sourceFilePath": "C:\\dev\\fkn-cardano\\db-sync-prisma\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../.env"
  },
  "relativePath": "../prisma",
  "clientVersion": "6.4.1",
  "engineVersion": "a9055b89e58b4b5bfb59600785423b1db3d0e75d",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../dist\"\n  previewFeatures = [\"typedSql\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel ada_pots {\n  id                BigInt  @id @default(autoincrement())\n  slot_no           BigInt\n  epoch_no          Int\n  treasury          Decimal @db.Decimal(20, 0)\n  reserves          Decimal @db.Decimal(20, 0)\n  rewards           Decimal @db.Decimal(20, 0)\n  utxo              Decimal @db.Decimal(20, 0)\n  deposits_stake    Decimal @db.Decimal(20, 0)\n  fees              Decimal @db.Decimal(20, 0)\n  block_id          BigInt\n  deposits_drep     Decimal @db.Decimal(20, 0)\n  deposits_proposal Decimal @db.Decimal(20, 0)\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel block {\n  id              BigInt   @id @default(autoincrement())\n  hash            Bytes    @unique(map: \"unique_block\")\n  epoch_no        Int?\n  slot_no         BigInt?\n  epoch_slot_no   Int?\n  block_no        Int?\n  previous_id     BigInt?\n  slot_leader_id  BigInt\n  size            Int\n  time            DateTime @db.Timestamp(6)\n  tx_count        BigInt\n  proto_major     Int\n  proto_minor     Int\n  vrf_key         String?  @db.VarChar\n  op_cert         Bytes?\n  op_cert_counter BigInt?\n\n  @@index([block_no], map: \"idx_block_block_no\")\n  @@index([epoch_no], map: \"idx_block_epoch_no\")\n  @@index([previous_id], map: \"idx_block_previous_id\")\n  @@index([slot_leader_id], map: \"idx_block_slot_leader_id\")\n  @@index([slot_no], map: \"idx_block_slot_no\")\n  @@index([time], map: \"idx_block_time\")\n}\n\nmodel collateral_tx_in {\n  id           BigInt @id @default(autoincrement())\n  tx_in_id     BigInt\n  tx_out_id    BigInt\n  tx_out_index Int    @db.SmallInt\n\n  @@index([tx_in_id], map: \"bf_idx_collateral_tx_in_tx_in_id\")\n  @@index([tx_out_id], map: \"idx_collateral_tx_in_tx_out_id\")\n}\n\nmodel collateral_tx_out {\n  id                  BigInt  @id @default(autoincrement())\n  tx_id               BigInt\n  index               Int     @db.SmallInt\n  address             String  @db.VarChar\n  address_has_script  Boolean\n  payment_cred        Bytes?\n  stake_address_id    BigInt?\n  value               Decimal @db.Decimal(20, 0)\n  data_hash           Bytes?\n  multi_assets_descr  String  @db.VarChar\n  inline_datum_id     BigInt?\n  reference_script_id BigInt?\n\n  @@index([tx_id], map: \"bf_idx_col_tx_out\")\n  @@index([inline_datum_id])\n  @@index([reference_script_id])\n  @@index([stake_address_id])\n}\n\nmodel committee {\n  id                     BigInt             @id @default(autoincrement())\n  gov_action_proposal_id BigInt?\n  quorum_numerator       BigInt\n  quorum_denominator     BigInt\n  committee_member       committee_member[]\n}\n\nmodel committee_de_registration {\n  id               BigInt  @id @default(autoincrement())\n  tx_id            BigInt\n  cert_index       Int\n  voting_anchor_id BigInt?\n  cold_key_id      BigInt\n}\n\nmodel committee_hash {\n  id         BigInt  @id @default(autoincrement())\n  raw        Bytes\n  has_script Boolean\n\n  @@unique([raw, has_script], map: \"unique_committee_hash\")\n}\n\nmodel committee_member {\n  id                BigInt    @id @default(autoincrement())\n  committee_id      BigInt\n  committee_hash_id BigInt\n  expiration_epoch  Int\n  committee         committee @relation(fields: [committee_id], references: [id], onDelete: Cascade, onUpdate: Restrict)\n\n  @@index([committee_id], map: \"idx_committee_member_committee_id\")\n}\n\nmodel committee_registration {\n  id          BigInt @id @default(autoincrement())\n  tx_id       BigInt\n  cert_index  Int\n  cold_key_id BigInt\n  hot_key_id  BigInt\n}\n\nmodel constitution {\n  id                     BigInt  @id @default(autoincrement())\n  gov_action_proposal_id BigInt?\n  voting_anchor_id       BigInt\n  script_hash            Bytes?\n}\n\nmodel cost_model {\n  id    BigInt @id @default(autoincrement())\n  costs Json\n  hash  Bytes  @unique(map: \"unique_cost_model\")\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel datum {\n  id    BigInt @id @default(autoincrement())\n  hash  Bytes  @unique(map: \"unique_datum\")\n  tx_id BigInt\n  value Json?\n  bytes Bytes\n\n  @@index([tx_id], map: \"idx_datum_tx_id\")\n}\n\nmodel delegation {\n  id              BigInt  @id @default(autoincrement())\n  addr_id         BigInt\n  cert_index      Int\n  pool_hash_id    BigInt\n  active_epoch_no BigInt\n  tx_id           BigInt\n  slot_no         BigInt\n  redeemer_id     BigInt?\n\n  @@index([active_epoch_no], map: \"idx_delegation_active_epoch_no\")\n  @@index([addr_id], map: \"idx_delegation_addr_id\")\n  @@index([pool_hash_id], map: \"idx_delegation_pool_hash_id\")\n  @@index([redeemer_id], map: \"idx_delegation_redeemer_id\")\n  @@index([tx_id], map: \"idx_delegation_tx_id\")\n}\n\nmodel delegation_vote {\n  id           BigInt  @id @default(autoincrement())\n  addr_id      BigInt\n  cert_index   Int\n  drep_hash_id BigInt\n  tx_id        BigInt\n  redeemer_id  BigInt?\n\n  @@index([addr_id], map: \"bf_idx_delegation_vote_addr_id\", type: Hash)\n}\n\nmodel delisted_pool {\n  id       BigInt @id @default(autoincrement())\n  hash_raw Bytes  @unique(map: \"unique_delisted_pool\")\n}\n\nmodel drep_distr {\n  id           BigInt @id @default(autoincrement())\n  hash_id      BigInt\n  amount       BigInt\n  epoch_no     Int\n  active_until Int?\n\n  @@unique([hash_id, epoch_no], map: \"unique_drep_distr\")\n}\n\nmodel drep_hash {\n  id         BigInt  @id @default(autoincrement())\n  raw        Bytes?\n  view       String  @db.VarChar\n  has_script Boolean\n\n  @@unique([raw, has_script], map: \"unique_drep_hash\")\n  @@index([has_script], map: \"bf_idx_drep_hash_has_script\", type: Hash)\n  @@index([raw], map: \"bf_idx_drep_hash_raw\", type: Hash)\n  @@index([view], map: \"bf_idx_drep_hash_view\", type: Hash)\n}\n\nmodel drep_registration {\n  id               BigInt  @id @default(autoincrement())\n  tx_id            BigInt\n  cert_index       Int\n  deposit          BigInt?\n  drep_hash_id     BigInt\n  voting_anchor_id BigInt?\n}\n\nmodel epoch {\n  id         BigInt   @id @default(autoincrement())\n  out_sum    Decimal  @db.Decimal(39, 0)\n  fees       Decimal  @db.Decimal(20, 0)\n  tx_count   Int\n  blk_count  Int\n  no         Int      @unique(map: \"unique_epoch\")\n  start_time DateTime @db.Timestamp(6)\n  end_time   DateTime @db.Timestamp(6)\n\n  @@index([no], map: \"idx_epoch_no\")\n}\n\nmodel epoch_param {\n  id                               BigInt   @id @default(autoincrement())\n  epoch_no                         Int\n  min_fee_a                        Int\n  min_fee_b                        Int\n  max_block_size                   Int\n  max_tx_size                      Int\n  max_bh_size                      Int\n  key_deposit                      Decimal  @db.Decimal(20, 0)\n  pool_deposit                     Decimal  @db.Decimal(20, 0)\n  max_epoch                        Int\n  optimal_pool_count               Int\n  influence                        Float\n  monetary_expand_rate             Float\n  treasury_growth_rate             Float\n  decentralisation                 Float\n  protocol_major                   Int\n  protocol_minor                   Int\n  min_utxo_value                   Decimal  @db.Decimal(20, 0)\n  min_pool_cost                    Decimal  @db.Decimal(20, 0)\n  nonce                            Bytes?\n  cost_model_id                    BigInt?\n  price_mem                        Float?\n  price_step                       Float?\n  max_tx_ex_mem                    Decimal? @db.Decimal(20, 0)\n  max_tx_ex_steps                  Decimal? @db.Decimal(20, 0)\n  max_block_ex_mem                 Decimal? @db.Decimal(20, 0)\n  max_block_ex_steps               Decimal? @db.Decimal(20, 0)\n  max_val_size                     Decimal? @db.Decimal(20, 0)\n  collateral_percent               Int?\n  max_collateral_inputs            Int?\n  block_id                         BigInt\n  extra_entropy                    Bytes?\n  coins_per_utxo_size              Decimal? @db.Decimal(20, 0)\n  pvt_motion_no_confidence         Float?\n  pvt_committee_normal             Float?\n  pvt_committee_no_confidence      Float?\n  pvt_hard_fork_initiation         Float?\n  dvt_motion_no_confidence         Float?\n  dvt_committee_normal             Float?\n  dvt_committee_no_confidence      Float?\n  dvt_update_to_constitution       Float?\n  dvt_hard_fork_initiation         Float?\n  dvt_p_p_network_group            Float?\n  dvt_p_p_economic_group           Float?\n  dvt_p_p_technical_group          Float?\n  dvt_p_p_gov_group                Float?\n  dvt_treasury_withdrawal          Float?\n  committee_min_size               Decimal? @db.Decimal(20, 0)\n  committee_max_term_length        Decimal? @db.Decimal(20, 0)\n  gov_action_lifetime              Decimal? @db.Decimal(20, 0)\n  gov_action_deposit               Decimal? @db.Decimal(20, 0)\n  drep_deposit                     Decimal? @db.Decimal(20, 0)\n  drep_activity                    Decimal? @db.Decimal(20, 0)\n  pvtpp_security_group             Float?\n  min_fee_ref_script_cost_per_byte Float?\n\n  @@index([block_id], map: \"idx_epoch_param_block_id\")\n  @@index([cost_model_id], map: \"idx_epoch_param_cost_model_id\")\n}\n\nmodel epoch_stake {\n  id       BigInt  @id @default(autoincrement())\n  addr_id  BigInt\n  pool_id  BigInt\n  amount   Decimal @db.Decimal(20, 0)\n  epoch_no Int\n\n  @@unique([epoch_no, id], map: \"bf_u_idx_epoch_stake_epoch_and_id\")\n  @@unique([epoch_no, addr_id, pool_id], map: \"unique_epoch_stake\")\n  @@index([addr_id], map: \"idx_epoch_stake_addr_id\")\n  @@index([epoch_no], map: \"idx_epoch_stake_epoch_no\")\n  @@index([pool_id], map: \"idx_epoch_stake_pool_id\")\n}\n\nmodel epoch_stake_progress {\n  id        BigInt  @id @default(autoincrement())\n  epoch_no  Int     @unique(map: \"unique_epoch_stake_progress\")\n  completed Boolean\n}\n\nmodel epoch_state {\n  id               BigInt  @id @default(autoincrement())\n  committee_id     BigInt?\n  no_confidence_id BigInt?\n  constitution_id  BigInt?\n  epoch_no         Int\n}\n\nmodel epoch_sync_time {\n  id      BigInt        @id @default(autoincrement())\n  no      BigInt        @unique(map: \"unique_epoch_sync_time\")\n  seconds BigInt\n  state   syncstatetype\n}\n\nmodel event_info {\n  id          BigInt  @id @default(autoincrement())\n  tx_id       BigInt?\n  epoch       Int\n  type        String  @db.VarChar\n  explanation String? @db.VarChar\n}\n\nmodel extra_key_witness {\n  id    BigInt @id @default(autoincrement())\n  hash  Bytes\n  tx_id BigInt\n\n  @@index([tx_id], map: \"idx_extra_key_witness_tx_id\")\n}\n\nmodel extra_migrations {\n  id          BigInt  @id @default(autoincrement())\n  token       String  @db.VarChar\n  description String? @db.VarChar\n}\n\nmodel gov_action_proposal {\n  id                       BigInt        @id @default(autoincrement())\n  tx_id                    BigInt\n  index                    BigInt\n  prev_gov_action_proposal BigInt?\n  deposit                  Decimal       @db.Decimal(20, 0)\n  return_address           BigInt\n  expiration               Int?\n  voting_anchor_id         BigInt?\n  type                     govactiontype\n  description              Json\n  param_proposal           BigInt?\n  ratified_epoch           Int?\n  enacted_epoch            Int?\n  dropped_epoch            Int?\n  expired_epoch            Int?\n}\n\nmodel ma_tx_mint {\n  id       BigInt  @id @default(autoincrement())\n  quantity Decimal @db.Decimal(20, 0)\n  tx_id    BigInt\n  ident    BigInt\n\n  @@index([ident], map: \"bf_idx_ma_tx_mint_ident\")\n  @@index([tx_id], map: \"idx_ma_tx_mint_tx_id\")\n}\n\nmodel ma_tx_out {\n  id        BigInt  @id @default(autoincrement())\n  quantity  Decimal @db.Decimal(20, 0)\n  tx_out_id BigInt\n  ident     BigInt\n\n  @@index([ident], map: \"bf_idx_ma_tx_out_ident\")\n  @@index([tx_out_id], map: \"idx_ma_tx_out_tx_out_id\")\n  @@index([ident, tx_out_id], map: \"idx_ma_tx_out_tx_out_id_ident\")\n  @@index([ident], map: \"ma_tx_out_ident\")\n}\n\nmodel meta {\n  id           BigInt   @id @default(autoincrement())\n  start_time   DateTime @unique(map: \"unique_meta\") @db.Timestamp(6)\n  network_name String   @db.VarChar\n  version      String   @db.VarChar\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel multi_asset {\n  id          BigInt @id @default(autoincrement())\n  policy      Bytes\n  name        Bytes\n  fingerprint String @db.VarChar\n\n  @@unique([policy, name], map: \"unique_multi_asset\")\n  @@index([policy], map: \"idx_multi_asset_policy_btree\")\n}\n\nmodel new_committee {\n  id                     BigInt @id @default(autoincrement())\n  gov_action_proposal_id BigInt\n  deleted_members        String @db.VarChar\n  added_members          String @db.VarChar\n  quorum_numerator       BigInt\n  quorum_denominator     BigInt\n}\n\nmodel off_chain_pool_data {\n  id          BigInt @id @default(autoincrement())\n  pool_id     BigInt\n  ticker_name String @db.VarChar\n  hash        Bytes\n  json        Json\n  bytes       Bytes\n  pmr_id      BigInt\n\n  @@unique([pool_id, pmr_id], map: \"unique_off_chain_pool_data\")\n  @@index([pmr_id], map: \"idx_off_chain_pool_data_pmr_id\")\n}\n\nmodel off_chain_pool_fetch_error {\n  id          BigInt   @id @default(autoincrement())\n  pool_id     BigInt\n  fetch_time  DateTime @db.Timestamp(6)\n  pmr_id      BigInt\n  fetch_error String   @db.VarChar\n  retry_count Int\n\n  @@unique([pool_id, fetch_time, retry_count], map: \"unique_off_chain_pool_fetch_error\")\n  @@index([pmr_id], map: \"idx_off_chain_pool_fetch_error_pmr_id\")\n}\n\nmodel off_chain_vote_author {\n  id                     BigInt  @id @default(autoincrement())\n  off_chain_vote_data_id BigInt\n  name                   String? @db.VarChar\n  witness_algorithm      String  @db.VarChar\n  public_key             String  @db.VarChar\n  signature              String  @db.VarChar\n  warning                String? @db.VarChar\n}\n\nmodel off_chain_vote_data {\n  id               BigInt   @id @default(autoincrement())\n  voting_anchor_id BigInt\n  hash             Bytes\n  json             Json\n  bytes            Bytes\n  warning          String?  @db.VarChar\n  language         String   @db.VarChar\n  comment          String?  @db.VarChar\n  is_valid         Boolean?\n\n  @@unique([voting_anchor_id, hash], map: \"unique_off_chain_vote_data\")\n}\n\nmodel off_chain_vote_drep_data {\n  id                     BigInt  @id @default(autoincrement())\n  off_chain_vote_data_id BigInt\n  payment_address        String? @db.VarChar\n  given_name             String  @db.VarChar\n  objectives             String? @db.VarChar\n  motivations            String? @db.VarChar\n  qualifications         String? @db.VarChar\n  image_url              String? @db.VarChar\n  image_hash             String? @db.VarChar\n}\n\nmodel off_chain_vote_external_update {\n  id                     BigInt @id @default(autoincrement())\n  off_chain_vote_data_id BigInt\n  title                  String @db.VarChar\n  uri                    String @db.VarChar\n}\n\nmodel off_chain_vote_fetch_error {\n  id               BigInt   @id @default(autoincrement())\n  voting_anchor_id BigInt\n  fetch_error      String   @db.VarChar\n  fetch_time       DateTime @db.Timestamp(6)\n  retry_count      Int\n\n  @@unique([voting_anchor_id, retry_count], map: \"unique_off_chain_vote_fetch_error\")\n}\n\nmodel off_chain_vote_gov_action_data {\n  id                     BigInt @id @default(autoincrement())\n  off_chain_vote_data_id BigInt\n  title                  String @db.VarChar\n  abstract               String @db.VarChar\n  motivation             String @db.VarChar\n  rationale              String @db.VarChar\n}\n\nmodel off_chain_vote_reference {\n  id                     BigInt  @id @default(autoincrement())\n  off_chain_vote_data_id BigInt\n  label                  String  @db.VarChar\n  uri                    String  @db.VarChar\n  hash_digest            String? @db.VarChar\n  hash_algorithm         String? @db.VarChar\n}\n\nmodel param_proposal {\n  id                               BigInt   @id @default(autoincrement())\n  epoch_no                         Int?\n  key                              Bytes?\n  min_fee_a                        Decimal? @db.Decimal(20, 0)\n  min_fee_b                        Decimal? @db.Decimal(20, 0)\n  max_block_size                   Decimal? @db.Decimal(20, 0)\n  max_tx_size                      Decimal? @db.Decimal(20, 0)\n  max_bh_size                      Decimal? @db.Decimal(20, 0)\n  key_deposit                      Decimal? @db.Decimal(20, 0)\n  pool_deposit                     Decimal? @db.Decimal(20, 0)\n  max_epoch                        Decimal? @db.Decimal(20, 0)\n  optimal_pool_count               Decimal? @db.Decimal(20, 0)\n  influence                        Float?\n  monetary_expand_rate             Float?\n  treasury_growth_rate             Float?\n  decentralisation                 Float?\n  entropy                          Bytes?\n  protocol_major                   Int?\n  protocol_minor                   Int?\n  min_utxo_value                   Decimal? @db.Decimal(20, 0)\n  min_pool_cost                    Decimal? @db.Decimal(20, 0)\n  cost_model_id                    BigInt?\n  price_mem                        Float?\n  price_step                       Float?\n  max_tx_ex_mem                    Decimal? @db.Decimal(20, 0)\n  max_tx_ex_steps                  Decimal? @db.Decimal(20, 0)\n  max_block_ex_mem                 Decimal? @db.Decimal(20, 0)\n  max_block_ex_steps               Decimal? @db.Decimal(20, 0)\n  max_val_size                     Decimal? @db.Decimal(20, 0)\n  collateral_percent               Int?\n  max_collateral_inputs            Int?\n  registered_tx_id                 BigInt\n  coins_per_utxo_size              Decimal? @db.Decimal(20, 0)\n  pvt_motion_no_confidence         Float?\n  pvt_committee_normal             Float?\n  pvt_committee_no_confidence      Float?\n  pvt_hard_fork_initiation         Float?\n  dvt_motion_no_confidence         Float?\n  dvt_committee_normal             Float?\n  dvt_committee_no_confidence      Float?\n  dvt_update_to_constitution       Float?\n  dvt_hard_fork_initiation         Float?\n  dvt_p_p_network_group            Float?\n  dvt_p_p_economic_group           Float?\n  dvt_p_p_technical_group          Float?\n  dvt_p_p_gov_group                Float?\n  dvt_treasury_withdrawal          Float?\n  committee_min_size               Decimal? @db.Decimal(20, 0)\n  committee_max_term_length        Decimal? @db.Decimal(20, 0)\n  gov_action_lifetime              Decimal? @db.Decimal(20, 0)\n  gov_action_deposit               Decimal? @db.Decimal(20, 0)\n  drep_deposit                     Decimal? @db.Decimal(20, 0)\n  drep_activity                    Decimal? @db.Decimal(20, 0)\n  pvtpp_security_group             Float?\n  min_fee_ref_script_cost_per_byte Float?\n\n  @@index([cost_model_id], map: \"idx_param_proposal_cost_model_id\")\n  @@index([registered_tx_id], map: \"idx_param_proposal_registered_tx_id\")\n}\n\nmodel pool_hash {\n  id       BigInt @id @default(autoincrement())\n  hash_raw Bytes  @unique(map: \"unique_pool_hash\")\n  view     String @db.VarChar\n\n  @@index([view], map: \"bf_idx_pool_hash_view\", type: Hash)\n}\n\nmodel pool_metadata_ref {\n  id               BigInt @id @default(autoincrement())\n  pool_id          BigInt\n  url              String @db.VarChar\n  hash             Bytes\n  registered_tx_id BigInt\n\n  @@index([pool_id], map: \"idx_pool_metadata_ref_pool_id\")\n  @@index([registered_tx_id], map: \"idx_pool_metadata_ref_registered_tx_id\")\n}\n\nmodel pool_owner {\n  id             BigInt @id @default(autoincrement())\n  addr_id        BigInt\n  pool_update_id BigInt\n\n  @@index([pool_update_id])\n}\n\nmodel pool_relay {\n  id           BigInt  @id @default(autoincrement())\n  update_id    BigInt\n  ipv4         String? @db.VarChar\n  ipv6         String? @db.VarChar\n  dns_name     String? @db.VarChar\n  dns_srv_name String? @db.VarChar\n  port         Int?\n\n  @@index([update_id], map: \"idx_pool_relay_update_id\")\n}\n\nmodel pool_retire {\n  id              BigInt @id @default(autoincrement())\n  hash_id         BigInt\n  cert_index      Int\n  announced_tx_id BigInt\n  retiring_epoch  Int\n\n  @@index([announced_tx_id], map: \"idx_pool_retire_announced_tx_id\")\n  @@index([hash_id], map: \"idx_pool_retire_hash_id\")\n}\n\nmodel pool_stat {\n  id                   BigInt   @id @default(autoincrement())\n  pool_hash_id         BigInt\n  epoch_no             Int\n  number_of_blocks     Decimal  @db.Decimal(20, 0)\n  number_of_delegators Decimal  @db.Decimal(20, 0)\n  stake                Decimal  @db.Decimal(20, 0)\n  voting_power         Decimal? @db.Decimal(20, 0)\n}\n\nmodel pool_update {\n  id               BigInt   @id @default(autoincrement())\n  hash_id          BigInt\n  cert_index       Int\n  vrf_key_hash     Bytes\n  pledge           Decimal  @db.Decimal(20, 0)\n  active_epoch_no  BigInt\n  meta_id          BigInt?\n  margin           Float\n  fixed_cost       Decimal  @db.Decimal(20, 0)\n  registered_tx_id BigInt\n  reward_addr_id   BigInt\n  deposit          Decimal? @db.Decimal(20, 0)\n\n  @@index([active_epoch_no], map: \"idx_pool_update_active_epoch_no\")\n  @@index([hash_id], map: \"idx_pool_update_hash_id\")\n  @@index([meta_id], map: \"idx_pool_update_meta_id\")\n  @@index([registered_tx_id], map: \"idx_pool_update_registered_tx_id\")\n  @@index([reward_addr_id], map: \"idx_pool_update_reward_addr\")\n}\n\nmodel pot_transfer {\n  id         BigInt  @id @default(autoincrement())\n  cert_index Int\n  treasury   Decimal @db.Decimal(20, 0)\n  reserves   Decimal @db.Decimal(20, 0)\n  tx_id      BigInt\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel redeemer {\n  id               BigInt            @id @default(autoincrement())\n  tx_id            BigInt\n  unit_mem         BigInt\n  unit_steps       BigInt\n  fee              Decimal?          @db.Decimal(20, 0)\n  purpose          scriptpurposetype\n  index            Int\n  script_hash      Bytes?\n  redeemer_data_id BigInt\n\n  @@index([tx_id], map: \"bf_idx_redeemer_tx_id\")\n  @@index([redeemer_data_id])\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel redeemer_data {\n  id    BigInt @id @default(autoincrement())\n  hash  Bytes  @unique(map: \"unique_redeemer_data\")\n  tx_id BigInt\n  value Json?\n  bytes Bytes\n\n  @@index([tx_id])\n}\n\nmodel reference_tx_in {\n  id           BigInt @id @default(autoincrement())\n  tx_in_id     BigInt\n  tx_out_id    BigInt\n  tx_out_index Int    @db.SmallInt\n\n  @@index([tx_in_id], map: \"bf_idx_reference_tx_in_tx_in_id\")\n  @@index([tx_out_id])\n}\n\nmodel reserve {\n  id         BigInt  @id @default(autoincrement())\n  addr_id    BigInt\n  cert_index Int\n  amount     Decimal @db.Decimal(20, 0)\n  tx_id      BigInt\n\n  @@index([addr_id], map: \"idx_reserve_addr_id\")\n  @@index([tx_id], map: \"idx_reserve_tx_id\")\n}\n\nmodel reserved_pool_ticker {\n  id        BigInt @id @default(autoincrement())\n  name      String @unique(map: \"unique_reserved_pool_ticker\") @db.VarChar\n  pool_hash Bytes\n\n  @@index([pool_hash], map: \"idx_reserved_pool_ticker_pool_hash\")\n}\n\nmodel reverse_index {\n  id       BigInt @id @default(autoincrement())\n  block_id BigInt\n  min_ids  String @db.VarChar\n}\n\nmodel reward {\n  addr_id         BigInt\n  type            rewardtype\n  amount          Decimal    @db.Decimal(20, 0)\n  spendable_epoch BigInt\n  pool_id         BigInt\n  earned_epoch    BigInt     @default(dbgenerated(\"\\nCASE\\n    WHEN (type = 'refund'::rewardtype) THEN spendable_epoch\\n    ELSE\\n    CASE\\n        WHEN (spendable_epoch >= 2) THEN (spendable_epoch - 2)\\n        ELSE (0)::bigint\\n    END\\nEND\"))\n\n  @@unique([addr_id, type, earned_epoch, pool_id], map: \"unique_reward\")\n  @@index([addr_id], map: \"idx_reward_addr_id\")\n  @@index([earned_epoch], map: \"idx_reward_earned_epoch\")\n  @@index([pool_id], map: \"idx_reward_pool_id\")\n  @@index([spendable_epoch], map: \"idx_reward_spendable_epoch\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel reward_rest {\n  addr_id         BigInt\n  type            rewardtype\n  amount          Decimal    @db.Decimal(20, 0)\n  spendable_epoch BigInt\n  earned_epoch    BigInt     @default(dbgenerated(\"\\nCASE\\n    WHEN (spendable_epoch >= 1) THEN (spendable_epoch - 1)\\n    ELSE (0)::bigint\\nEND\"))\n\n  @@index([addr_id], map: \"bf_idx_reward_rest_addr_id\")\n  @@index([spendable_epoch], map: \"bf_idx_reward_rest_spendable_epoch\")\n  @@ignore\n}\n\nmodel schema_version {\n  id          BigInt @id @default(autoincrement())\n  stage_one   BigInt\n  stage_two   BigInt\n  stage_three BigInt\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel script {\n  id              BigInt     @id @default(autoincrement())\n  tx_id           BigInt\n  hash            Bytes      @unique(map: \"unique_script\")\n  type            scripttype\n  json            Json?\n  bytes           Bytes?\n  serialised_size Int?\n\n  @@index([tx_id], map: \"idx_script_tx_id\")\n}\n\nmodel slot_leader {\n  id           BigInt  @id @default(autoincrement())\n  hash         Bytes   @unique(map: \"unique_slot_leader\")\n  pool_hash_id BigInt?\n  description  String  @db.VarChar\n\n  @@index([pool_hash_id], map: \"idx_slot_leader_pool_hash_id\")\n}\n\nmodel stake_address {\n  id          BigInt @id @default(autoincrement())\n  hash_raw    Bytes  @unique(map: \"unique_stake_address\")\n  view        String @db.VarChar\n  script_hash Bytes?\n\n  @@index([view], map: \"idx_stake_address_view\", type: Hash)\n}\n\nmodel stake_deregistration {\n  id          BigInt  @id @default(autoincrement())\n  addr_id     BigInt\n  cert_index  Int\n  epoch_no    Int\n  tx_id       BigInt\n  redeemer_id BigInt?\n\n  @@index([addr_id], map: \"idx_stake_deregistration_addr_id\")\n  @@index([redeemer_id], map: \"idx_stake_deregistration_redeemer_id\")\n  @@index([tx_id], map: \"idx_stake_deregistration_tx_id\")\n}\n\nmodel stake_registration {\n  id         BigInt   @id @default(autoincrement())\n  addr_id    BigInt\n  cert_index Int\n  epoch_no   Int\n  tx_id      BigInt\n  deposit    Decimal? @db.Decimal(20, 0)\n\n  @@index([addr_id], map: \"idx_stake_registration_addr_id\")\n  @@index([tx_id], map: \"idx_stake_registration_tx_id\")\n}\n\nmodel treasury {\n  id         BigInt  @id @default(autoincrement())\n  addr_id    BigInt\n  cert_index Int\n  amount     Decimal @db.Decimal(20, 0)\n  tx_id      BigInt\n\n  @@index([addr_id], map: \"idx_treasury_addr_id\")\n  @@index([tx_id], map: \"idx_treasury_tx_id\")\n}\n\nmodel treasury_withdrawal {\n  id                     BigInt  @id @default(autoincrement())\n  gov_action_proposal_id BigInt\n  stake_address_id       BigInt\n  amount                 Decimal @db.Decimal(20, 0)\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel tx {\n  id                BigInt   @id @default(autoincrement())\n  hash              Bytes    @unique(map: \"unique_tx\")\n  block_id          BigInt\n  block_index       Int\n  out_sum           Decimal  @db.Decimal(20, 0)\n  fee               Decimal  @db.Decimal(20, 0)\n  deposit           BigInt?\n  size              Int\n  invalid_before    Decimal? @db.Decimal(20, 0)\n  invalid_hereafter Decimal? @db.Decimal(20, 0)\n  valid_contract    Boolean\n  script_size       Int\n  treasury_donation Decimal  @default(0) @db.Decimal(20, 0)\n\n  @@index([block_id], map: \"idx_tx_block_id\")\n}\n\nmodel tx_cbor {\n  id    BigInt @id @default(autoincrement())\n  tx_id BigInt\n  bytes Bytes\n\n  @@index([tx_id], map: \"idx_tx_cbor_tx_id\")\n}\n\nmodel tx_in {\n  id           BigInt  @id @default(autoincrement())\n  tx_in_id     BigInt\n  tx_out_id    BigInt\n  tx_out_index Int     @db.SmallInt\n  redeemer_id  BigInt?\n\n  @@index([redeemer_id], map: \"idx_tx_in_redeemer_id\")\n  @@index([tx_in_id], map: \"idx_tx_in_source_tx\")\n  @@index([tx_in_id], map: \"idx_tx_in_tx_in_id\")\n  @@index([tx_out_id], map: \"idx_tx_in_tx_out_id\")\n  @@index([tx_out_id, tx_out_index], map: \"idx_tx_in_tx_out_id_tx_out_index\")\n}\n\nmodel tx_metadata {\n  id    BigInt  @id @default(autoincrement())\n  key   Decimal @db.Decimal(20, 0)\n  json  Json?\n  bytes Bytes\n  tx_id BigInt\n\n  @@index([tx_id], map: \"idx_tx_metadata_tx_id\")\n}\n\n/// This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\nmodel tx_out {\n  id                  BigInt  @id @default(autoincrement())\n  tx_id               BigInt\n  index               Int     @db.SmallInt\n  address             String  @db.VarChar\n  address_has_script  Boolean\n  payment_cred        Bytes?\n  stake_address_id    BigInt?\n  value               Decimal @db.Decimal(20, 0)\n  data_hash           Bytes?\n  inline_datum_id     BigInt?\n  reference_script_id BigInt?\n  consumed_by_tx_id   BigInt?\n\n  @@unique([tx_id, index], map: \"unique_txout\")\n  @@index([consumed_by_tx_id], map: \"idx_tx_out_consumed_by_tx_id\")\n  @@index([payment_cred], map: \"idx_tx_out_payment_cred\")\n  @@index([stake_address_id], map: \"idx_tx_out_stake_address_id\")\n  @@index([tx_id], map: \"idx_tx_out_tx_id\")\n  @@index([inline_datum_id])\n  @@index([reference_script_id])\n}\n\nmodel voting_anchor {\n  id        BigInt     @id @default(autoincrement())\n  url       String     @db.VarChar\n  data_hash Bytes\n  type      anchortype\n  block_id  BigInt\n\n  @@unique([data_hash, url, type], map: \"unique_voting_anchor\")\n}\n\nmodel voting_procedure {\n  id                     BigInt    @id @default(autoincrement())\n  tx_id                  BigInt\n  index                  Int\n  gov_action_proposal_id BigInt\n  voter_role             voterrole\n  drep_voter             BigInt?\n  pool_voter             BigInt?\n  vote                   vote\n  voting_anchor_id       BigInt?\n  committee_voter        BigInt?\n  invalid                BigInt?\n}\n\nmodel withdrawal {\n  id          BigInt  @id @default(autoincrement())\n  addr_id     BigInt\n  amount      Decimal @db.Decimal(20, 0)\n  redeemer_id BigInt?\n  tx_id       BigInt\n\n  @@index([addr_id], map: \"idx_withdrawal_addr_id\")\n  @@index([redeemer_id], map: \"idx_withdrawal_redeemer_id\")\n  @@index([tx_id], map: \"idx_withdrawal_tx_id\")\n}\n\nenum anchortype {\n  gov_action\n  drep\n  other\n  vote\n  committee_dereg\n  constitution\n}\n\nenum govactiontype {\n  ParameterChange\n  HardForkInitiation\n  TreasuryWithdrawals\n  NoConfidence\n  NewCommittee\n  NewConstitution\n  InfoAction\n}\n\nenum rewardtype {\n  leader\n  member\n  reserves\n  treasury\n  refund\n  proposal_refund\n}\n\nenum scriptpurposetype {\n  spend\n  mint\n  cert\n  reward\n  vote\n  propose\n}\n\nenum scripttype {\n  multisig\n  timelock\n  plutusV1\n  plutusV2\n  plutusV3\n}\n\nenum syncstatetype {\n  lagging\n  following\n}\n\nenum vote {\n  Yes\n  No\n  Abstain\n}\n\nenum voterrole {\n  ConstitutionalCommittee\n  DRep\n  SPO\n}\n",
  "inlineSchemaHash": "40da160964ed831d65cb07947ba7cb4a0ac9981b8b376866ee424b3a368ed299",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"ada_pots\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slot_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"treasury\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserves\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewards\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utxo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposits_stake\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposits_drep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposits_proposal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"block\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slot_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_slot_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previous_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slot_leader_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proto_major\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proto_minor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vrf_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"op_cert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"op_cert_counter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"collateral_tx_in\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_in_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_out_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_out_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"collateral_tx_out\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_has_script\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_cred\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stake_address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"multi_assets_descr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inline_datum_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference_script_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"committee\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_proposal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quorum_numerator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quorum_denominator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_member\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"committee_member\",\"nativeType\":null,\"relationName\":\"committeeTocommittee_member\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"committee_de_registration\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_anchor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cold_key_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"committee_hash\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_script\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"raw\",\"has_script\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"raw\",\"has_script\"]}],\"isGenerated\":false},\"committee_member\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiration_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"committee\",\"nativeType\":null,\"relationName\":\"committeeTocommittee_member\",\"relationFromFields\":[\"committee_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"committee_registration\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cold_key_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hot_key_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"constitution\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_proposal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_anchor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"script_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cost_model\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"datum\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"delegation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active_epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slot_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeemer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"delegation_vote\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drep_hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeemer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"delisted_pool\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"drep_distr\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active_until\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"hash_id\",\"epoch_no\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"hash_id\",\"epoch_no\"]}],\"isGenerated\":false},\"drep_hash\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_script\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"raw\",\"has_script\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"raw\",\"has_script\"]}],\"isGenerated\":false},\"drep_registration\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drep_hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_anchor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"epoch\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"out_sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"39\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blk_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"epoch_param\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_fee_a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_fee_b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_block_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_tx_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_bh_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optimal_pool_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"influence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monetary_expand_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"treasury_growth_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decentralisation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"protocol_major\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"protocol_minor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_utxo_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_pool_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nonce\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost_model_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_mem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_step\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_tx_ex_mem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_tx_ex_steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_block_ex_mem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_block_ex_steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_val_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collateral_percent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_collateral_inputs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra_entropy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coins_per_utxo_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_motion_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_committee_normal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_committee_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_hard_fork_initiation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_motion_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_committee_normal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_committee_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_update_to_constitution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_hard_fork_initiation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_network_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_economic_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_technical_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_gov_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_treasury_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_min_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_max_term_length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_lifetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drep_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drep_activity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvtpp_security_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_fee_ref_script_cost_per_byte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"epoch_stake\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"epoch_no\",\"id\"],[\"epoch_no\",\"addr_id\",\"pool_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"epoch_no\",\"id\"]},{\"name\":null,\"fields\":[\"epoch_no\",\"addr_id\",\"pool_id\"]}],\"isGenerated\":false},\"epoch_stake_progress\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"epoch_state\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_confidence_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"constitution_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"epoch_sync_time\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seconds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"syncstatetype\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"event_info\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"extra_key_witness\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"extra_migrations\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gov_action_proposal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prev_gov_action_proposal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"return_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_anchor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"govactiontype\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"param_proposal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratified_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enacted_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dropped_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expired_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ma_tx_mint\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ident\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ma_tx_out\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_out_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ident\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"meta\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"network_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"multi_asset\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fingerprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"policy\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"policy\",\"name\"]}],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"new_committee\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_proposal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_members\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"added_members\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quorum_numerator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quorum_denominator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"off_chain_pool_data\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticker_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"json\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"pool_id\",\"pmr_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"pool_id\",\"pmr_id\"]}],\"isGenerated\":false},\"off_chain_pool_fetch_error\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetch_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetch_error\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retry_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"pool_id\",\"fetch_time\",\"retry_count\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"pool_id\",\"fetch_time\",\"retry_count\"]}],\"isGenerated\":false},\"off_chain_vote_author\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"off_chain_vote_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"witness_algorithm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"public_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signature\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warning\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"off_chain_vote_data\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_anchor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"json\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warning\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_valid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"voting_anchor_id\",\"hash\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"voting_anchor_id\",\"hash\"]}],\"isGenerated\":false},\"off_chain_vote_drep_data\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"off_chain_vote_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"given_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"objectives\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qualifications\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"off_chain_vote_external_update\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"off_chain_vote_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"off_chain_vote_fetch_error\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_anchor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetch_error\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetch_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retry_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"voting_anchor_id\",\"retry_count\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"voting_anchor_id\",\"retry_count\"]}],\"isGenerated\":false},\"off_chain_vote_gov_action_data\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"off_chain_vote_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abstract\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rationale\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"off_chain_vote_reference\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"off_chain_vote_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_digest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_algorithm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"param_proposal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_fee_a\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_fee_b\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_block_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_tx_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_bh_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optimal_pool_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"influence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monetary_expand_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"treasury_growth_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decentralisation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entropy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"protocol_major\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"protocol_minor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_utxo_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_pool_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost_model_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_mem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_step\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_tx_ex_mem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_tx_ex_steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_block_ex_mem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_block_ex_steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_val_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collateral_percent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_collateral_inputs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registered_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coins_per_utxo_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_motion_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_committee_normal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_committee_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvt_hard_fork_initiation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_motion_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_committee_normal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_committee_no_confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_update_to_constitution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_hard_fork_initiation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_network_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_economic_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_technical_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_p_p_gov_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvt_treasury_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_min_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_max_term_length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_lifetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drep_deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drep_activity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pvtpp_security_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_fee_ref_script_cost_per_byte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pool_hash\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pool_metadata_ref\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registered_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pool_owner\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_update_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pool_relay\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipv4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipv6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_srv_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"port\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pool_retire\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"announced_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retiring_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pool_stat\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number_of_blocks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number_of_delegators\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stake\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_power\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pool_update\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vrf_key_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pledge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active_epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"margin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fixed_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registered_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reward_addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pot_transfer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"treasury\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserves\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"redeemer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_mem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purpose\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"scriptpurposetype\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"script_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeemer_data_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"redeemer_data\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"reference_tx_in\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_in_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_out_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_out_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reserve\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reserved_pool_ticker\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reverse_index\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_ids\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reward\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rewardtype\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spendable_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"earned_epoch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"dbgenerated\",\"args\":[\"\\\\nCASE\\\\n    WHEN (type = 'refund'::rewardtype) THEN spendable_epoch\\\\n    ELSE\\\\n    CASE\\\\n        WHEN (spendable_epoch >= 2) THEN (spendable_epoch - 2)\\\\n        ELSE (0)::bigint\\\\n    END\\\\nEND\"]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"addr_id\",\"type\",\"earned_epoch\",\"pool_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"addr_id\",\"type\",\"earned_epoch\",\"pool_id\"]}],\"isGenerated\":false},\"schema_version\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage_one\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage_two\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage_three\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"script\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"scripttype\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"json\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serialised_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"slot_leader\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_hash_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"stake_address\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"script_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"stake_deregistration\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeemer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"stake_registration\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epoch_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"treasury\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cert_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"treasury_withdrawal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_proposal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stake_address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tx\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"out_sum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invalid_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invalid_hereafter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valid_contract\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"script_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"treasury_donation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"tx_cbor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tx_in\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_in_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_out_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_out_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeemer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tx_metadata\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"json\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tx_out\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_has_script\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_cred\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stake_address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inline_datum_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference_script_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consumed_by_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tx_id\",\"index\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tx_id\",\"index\"]}],\"isGenerated\":false,\"documentation\":\"This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.\"},\"voting_anchor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"anchortype\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"data_hash\",\"url\",\"type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"data_hash\",\"url\",\"type\"]}],\"isGenerated\":false},\"voting_procedure\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gov_action_proposal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voter_role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"voterrole\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"drep_voter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pool_voter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vote\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vote\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voting_anchor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"committee_voter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invalid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"withdrawal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addr_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"20\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"redeemer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"anchortype\":{\"values\":[{\"name\":\"gov_action\",\"dbName\":null},{\"name\":\"drep\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null},{\"name\":\"vote\",\"dbName\":null},{\"name\":\"committee_dereg\",\"dbName\":null},{\"name\":\"constitution\",\"dbName\":null}],\"dbName\":null},\"govactiontype\":{\"values\":[{\"name\":\"ParameterChange\",\"dbName\":null},{\"name\":\"HardForkInitiation\",\"dbName\":null},{\"name\":\"TreasuryWithdrawals\",\"dbName\":null},{\"name\":\"NoConfidence\",\"dbName\":null},{\"name\":\"NewCommittee\",\"dbName\":null},{\"name\":\"NewConstitution\",\"dbName\":null},{\"name\":\"InfoAction\",\"dbName\":null}],\"dbName\":null},\"rewardtype\":{\"values\":[{\"name\":\"leader\",\"dbName\":null},{\"name\":\"member\",\"dbName\":null},{\"name\":\"reserves\",\"dbName\":null},{\"name\":\"treasury\",\"dbName\":null},{\"name\":\"refund\",\"dbName\":null},{\"name\":\"proposal_refund\",\"dbName\":null}],\"dbName\":null},\"scriptpurposetype\":{\"values\":[{\"name\":\"spend\",\"dbName\":null},{\"name\":\"mint\",\"dbName\":null},{\"name\":\"cert\",\"dbName\":null},{\"name\":\"reward\",\"dbName\":null},{\"name\":\"vote\",\"dbName\":null},{\"name\":\"propose\",\"dbName\":null}],\"dbName\":null},\"scripttype\":{\"values\":[{\"name\":\"multisig\",\"dbName\":null},{\"name\":\"timelock\",\"dbName\":null},{\"name\":\"plutusV1\",\"dbName\":null},{\"name\":\"plutusV2\",\"dbName\":null},{\"name\":\"plutusV3\",\"dbName\":null}],\"dbName\":null},\"syncstatetype\":{\"values\":[{\"name\":\"lagging\",\"dbName\":null},{\"name\":\"following\",\"dbName\":null}],\"dbName\":null},\"vote\":{\"values\":[{\"name\":\"Yes\",\"dbName\":null},{\"name\":\"No\",\"dbName\":null},{\"name\":\"Abstain\",\"dbName\":null}],\"dbName\":null},\"voterrole\":{\"values\":[{\"name\":\"ConstitutionalCommittee\",\"dbName\":null},{\"name\":\"DRep\",\"dbName\":null},{\"name\":\"SPO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

