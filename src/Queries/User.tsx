import gql from 'graphql-tag';

const CURRENT_USER = gql`
  query currentUser {
    viewer {
      avatarUrl
      name
      login

      organizations(first: 10) {
        totalCount
        nodes {
          avatarUrl
          login
        }
      }
    }
  }
`;

export { CURRENT_USER };
