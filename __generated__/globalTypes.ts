/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Detailed status information about a pull request merge.
 */
export enum MergeStateStatus {
  BEHIND = "BEHIND",
  BLOCKED = "BLOCKED",
  CLEAN = "CLEAN",
  DIRTY = "DIRTY",
  DRAFT = "DRAFT",
  HAS_HOOKS = "HAS_HOOKS",
  UNKNOWN = "UNKNOWN",
  UNSTABLE = "UNSTABLE",
}

/**
 * Whether or not a PullRequest can be merged.
 */
export enum MergeableState {
  CONFLICTING = "CONFLICTING",
  MERGEABLE = "MERGEABLE",
  UNKNOWN = "UNKNOWN",
}

/**
 * The possible states of a pull request review.
 */
export enum PullRequestReviewState {
  APPROVED = "APPROVED",
  CHANGES_REQUESTED = "CHANGES_REQUESTED",
  COMMENTED = "COMMENTED",
  DISMISSED = "DISMISSED",
  PENDING = "PENDING",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
