/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MergeableState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: organization
// ====================================================

export interface organization_organization_repositories_edges_node_pullRequests_nodes_repository_owner {
  __typename: "Organization" | "User";
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface organization_organization_repositories_edges_node_pullRequests_nodes_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: organization_organization_repositories_edges_node_pullRequests_nodes_repository_owner;
}

export interface organization_organization_repositories_edges_node_pullRequests_nodes_author {
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

export interface organization_organization_repositories_edges_node_pullRequests_nodes {
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
   * Whether or not the pull request can be merged based on the existence of merge conflicts.
   */
  mergeable: MergeableState;
  /**
   * The HTTP URL for this pull request.
   */
  url: any;
  /**
   * The number of deletions in this pull request.
   */
  deletions: number;
  /**
   * The number of additions in this pull request.
   */
  additions: number;
  /**
   * The repository associated with this node.
   */
  repository: organization_organization_repositories_edges_node_pullRequests_nodes_repository;
  /**
   * The actor who authored the comment.
   */
  author: organization_organization_repositories_edges_node_pullRequests_nodes_author | null;
}

export interface organization_organization_repositories_edges_node_pullRequests {
  __typename: "PullRequestConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (organization_organization_repositories_edges_node_pullRequests_nodes | null)[] | null;
}

export interface organization_organization_repositories_edges_node {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * A list of pull requests that have been opened in the repository.
   */
  pullRequests: organization_organization_repositories_edges_node_pullRequests;
}

export interface organization_organization_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: organization_organization_repositories_edges_node | null;
}

export interface organization_organization_repositories {
  __typename: "RepositoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of edges.
   */
  edges: (organization_organization_repositories_edges | null)[] | null;
}

export interface organization_organization {
  __typename: "Organization";
  /**
   * A list of repositories that the user owns.
   */
  repositories: organization_organization_repositories;
}

export interface organization {
  /**
   * Lookup a organization by login.
   */
  organization: organization_organization | null;
}

export interface organizationVariables {
  login: string;
  first: number;
}
