import React, { useEffect, useState, useCallback } from 'react';

import PullRequestCard from '../Components/PullRequestCard';
import { useCurrentUser } from '../Hooks/useCurrentUser';
import { latestPrs, latestPrsVariables } from './__generated__/latestPrs';
import gql from 'graphql-tag';

import styled from '../Theme/styled-components';
import { useApolloClient } from 'react-apollo-hooks';
import { node } from 'prop-types';
import Spinner from '../Components/Ui/Spinner';

const PRWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const LATEST_PRS = gql`
  # Write your query or mutation here
  query latestPrs($first: Int!, $query: String!) {
    search(first: $first, query: $query, type: ISSUE) {
      nodes {
        __typename
        ... on PullRequest {
          id
          title
          createdAt
          updatedAt
          baseRefName
          headRefName
          mergeStateStatus
          mergeable
          deletions
          additions
          permalink
          reviews(first: 10) {
            totalCount
            nodes {
              author {
                avatarUrl
              }
              state
            }
          }
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

        ... on Issue {
          id
        }
      }
    }
  }
`;

const KioskView: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [prs, setPrs] = useState([]);
  const {
    selectedOrganizations,
    user: { login }
  } = useCurrentUser();
  const client = useApolloClient();

  const fetchPrs = useCallback(() => {
    const orgString =
      selectedOrganizations.length > 0
        ? selectedOrganizations.map(e => 'org:' + e).join(' ')
        : 'author:' + login;
    const queryString = orgString + ' is:open is:pr ! label:dependencies';

    client
      .query<latestPrs, latestPrsVariables>({
        query: LATEST_PRS,
        fetchPolicy: 'network-only',
        variables: { first: 20, query: queryString }
      })
      .then(({ data, loading }) => {
        if (!loading && data && data.search) {
          const {
            search: { nodes }
          } = data;

          const filteredAndSorted = nodes.filter(
            n =>
              n.__typename === 'PullRequest' &&
              n.mergeStateStatus !== 'UNKNOWN' &&
              n.title.indexOf('WIP') < 0 &&
              n.mergeStateStatus !== 'DRAFT'
          );
          setPrs(filteredAndSorted);
          setLoaded(true);
        }
      });
  }, [client, login, selectedOrganizations]);

  useEffect(() => {
    fetchPrs();
    const i = setInterval(() => fetchPrs(), 10000);
    return () => clearInterval(i);
  }, [selectedOrganizations, fetchPrs]);

  if (loaded === false) {
    return (
      <PRWrapper>
        <Spinner />
      </PRWrapper>
    );
  }

  return (
    <PRWrapper>
      {prs.map(
        pr =>
          pr.__typename === 'PullRequest' && (
            <PullRequestCard key={pr.id} {...pr} />
          )
      )}
    </PRWrapper>
  );
};

export default KioskView;
