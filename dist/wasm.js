
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
exports.syncstatetype = exports.$Enums.syncstatetype = {
  lagging: 'lagging',
  following: 'following'
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

exports.scriptpurposetype = exports.$Enums.scriptpurposetype = {
  spend: 'spend',
  mint: 'mint',
  cert: 'cert',
  reward: 'reward',
  vote: 'vote',
  propose: 'propose'
};

exports.rewardtype = exports.$Enums.rewardtype = {
  leader: 'leader',
  member: 'member',
  reserves: 'reserves',
  treasury: 'treasury',
  refund: 'refund',
  proposal_refund: 'proposal_refund'
};

exports.scripttype = exports.$Enums.scripttype = {
  multisig: 'multisig',
  timelock: 'timelock',
  plutusV1: 'plutusV1',
  plutusV2: 'plutusV2',
  plutusV3: 'plutusV3'
};

exports.anchortype = exports.$Enums.anchortype = {
  gov_action: 'gov_action',
  drep: 'drep',
  other: 'other',
  vote: 'vote',
  committee_dereg: 'committee_dereg',
  constitution: 'constitution'
};

exports.voterrole = exports.$Enums.voterrole = {
  ConstitutionalCommittee: 'ConstitutionalCommittee',
  DRep: 'DRep',
  SPO: 'SPO'
};

exports.vote = exports.$Enums.vote = {
  Yes: 'Yes',
  No: 'No',
  Abstain: 'Abstain'
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
