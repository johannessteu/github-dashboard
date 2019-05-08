/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: currentUser
// ====================================================

export interface currentUser_viewer_organizations_nodes {
  __typename: "Organization";
  /**
   * A URL pointing to the organization's public avatar.
   */
  avatarUrl: any;
  /**
   * The organization's login name.
   */
  login: string;
}

export interface currentUser_viewer_organizations {
  __typename: "OrganizationConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (currentUser_viewer_organizations_nodes | null)[] | null;
}

export interface currentUser_viewer {
  __typename: "User";
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A list of organizations the user belongs to.
   */
  organizations: currentUser_viewer_organizations;
}

export interface currentUser {
  /**
   * The currently authenticated user.
   */
  viewer: currentUser_viewer;
}
