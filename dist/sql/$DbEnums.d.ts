export interface $DbEnums {}


export namespace $DbEnums {
  type anchortype = "gov_action" | "drep" | "other" | "vote" | "committee_dereg" | "constitution"
  type govactiontype = "ParameterChange" | "HardForkInitiation" | "TreasuryWithdrawals" | "NoConfidence" | "NewCommittee" | "NewConstitution" | "InfoAction"
  type rewardtype = "leader" | "member" | "reserves" | "treasury" | "refund" | "proposal_refund"
  type scriptpurposetype = "spend" | "mint" | "cert" | "reward" | "vote" | "propose"
  type scripttype = "multisig" | "timelock" | "plutusV1" | "plutusV2" | "plutusV3"
  type syncstatetype = "lagging" | "following"
  type vote = "Yes" | "No" | "Abstain"
  type voterrole = "ConstitutionalCommittee" | "DRep" | "SPO"
}
