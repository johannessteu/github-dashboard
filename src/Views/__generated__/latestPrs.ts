/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MergeStateStatus, MergeableState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: latestPrs
// ====================================================

export interface latestPrs_search_nodes_Repository {
  __typename: "Repository" | "User" | "Organization" | "MarketplaceListing";
}

export interface latestPrs_search_nodes_PullRequest_reviews {
  __typename: "PullRequestReviewConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface latestPrs_search_nodes_PullRequest_repository_owner {
  __typename: "Organization" | "User";
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface latestPrs_search_nodes_PullRequest_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: latestPrs_search_nodes_PullRequest_repository_owner;
}

export interface latestPrs_search_nodes_PullRequest_author {
  __typename: "Organization" | "User" | "Bot";
  /**
   * The username of the actor.
   */
  login: string;
  /**
   * A URL pointing to the actor's public avatar.
   */
  avatarUrl: any;
}

export interface latestPrs_search_nodes_PullRequest {
  __typename: "PullRequest";
  id: string;
  /**
   * Identifies the pull request title.
   */
  title: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted.
   */
  baseRefName: string;
  /**
   * Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted.
   */
  headRefName: string;
  /**
   * Detailed information about the current pull request merge state status.
   */
  mergeStateStatus: MergeStateStatus;
  /**
   * Whether or not the pull request can be merged based on the existence of merge conflicts.
   */
  mergeable: MergeableState;
  /**
   * The number of deletions in this pull request.
   */
  deletions: number;
  /**
   * The number of additions in this pull request.
   */
  additions: number;
  /**
   * The permalink to the pull request.
   */
  permalink: any;
  /**
   * A list of reviews associated with the pull request.
   */
  reviews: latestPrs_search_nodes_PullRequest_reviews | null;
  /**
   * The repository associated with this node.
   */
  repository: latestPrs_search_nodes_PullRequest_repository;
  /**
   * The actor who authored the comment.
   */
  author: latestPrs_search_nodes_PullRequest_author | null;
}

export interface latestPrs_search_nodes_Issue {
  __typename: "Issue";
  id: string;
}

export type latestPrs_search_nodes = latestPrs_search_nodes_Repository | latestPrs_search_nodes_PullRequest | latestPrs_search_nodes_Issue;

export interface latestPrs_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of nodes.
   */
  nodes: (latestPrs_search_nodes | null)[] | null;
}

export interface latestPrs {
  /**
   * Perform a search across resources.
   */
  search: latestPrs_search;
}

export interface latestPrsVariables {
  first: number;
  query: string;
}
