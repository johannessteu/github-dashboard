import gql from 'graphql-tag';

// adjust repo limit!?
const ORGANIZATION_PRS = gql`
  query organization($login: String!, $first: Int!) {
    organization(login: $login) {
      repositories(first: 20, orderBy: { field: PUSHED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            name
            pullRequests(first: $first, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
              totalCount
              nodes {
                id
                title
                createdAt
                updatedAt
                baseRefName
                headRefName
                mergeable
                url
                deletions
                additions
                repository {
                  name
                  owner {
                    avatarUrl
                  }
                }
                author {
                  login
                  avatarUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { ORGANIZATION_PRS };
