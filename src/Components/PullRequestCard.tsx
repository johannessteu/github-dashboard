import React from 'react';

import styled from '../Theme/styled-components';
import { latestPrs_search_nodes_PullRequest } from '../Views/__generated__/latestPrs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const PullRequestWrapper = styled.div`
  margin: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.colors.white};
  width: 30%;
`;

const Header = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  min-height: 130px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  margin-left: 20px;
  font-size: 20px;
  line-height: 1.5;
  flex-shrink: 1;
  font-weight: normal;
`;

const Avatar = styled.img<{ size: number }>`
  border-radius: 50%;
  width: ${props => props.size}px;
  min-width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: inset -17px 59px 39px -69px rgba(0, 0, 0, 0.25);

  img {
    margin-right: 10px;
  }
`;
const Section = styled.div`
  border-top: 1px solid ${props => props.theme.colors.contrast};
  padding: 20px;
`;

const MergeButton = styled.a<{ mergeState: 'ready' | 'block' | 'warn' }>`
  padding: 20px;
  text-align: center;
  display: block;
  color: ${props => props.theme.colors.white};
  background-color: ${props => (props.mergeState === 'ready' ? props.theme.colors.success : props.mergeState === 'block' ? props.theme.colors.error : props.theme.colors.warning)};
`;

const PullRequestCard: React.FC<latestPrs_search_nodes_PullRequest> = React.memo(props => {
  const mergeState = props.mergeStateStatus === 'CLEAN' ? 'ready' : props.mergeStateStatus === 'BLOCKED' ? 'block' : 'warn';
  const mergeIcon: IconName = mergeState === 'ready' ? 'check-double' : mergeState === 'block' ? 'stop-circle' : 'exclamation-circle';

  return (
    <PullRequestWrapper>
      <Header>
        <Avatar size={50} src={props.author.avatarUrl} />
        <Title>
          {props.title.substr(0, 50)}
          {props.title.length > 50 && '...'}
        </Title>
      </Header>
      <Project>
        <Avatar size={25} src={props.repository.owner.avatarUrl} /> {props.repository.name}
      </Project>
      <Section>
        {props.permalink}
        {props.reviews.totalCount}
      </Section>
      <Section>
        <FontAwesomeIcon style={{ marginRight: '10px' }} icon={['fas', 'code-branch']} />
        {props.baseRefName} <FontAwesomeIcon style={{ margin: '0 10px' }} icon={['fas', 'arrow-circle-left']} /> {props.headRefName.substring(0, 30)}
        {props.headRefName.length > 30 && '...'}
      </Section>
      <MergeButton target="_blank" href={props.permalink} mergeState={mergeState}>
        <FontAwesomeIcon icon={['fas', mergeIcon]} size="2x" />
      </MergeButton>
    </PullRequestWrapper>
  );
});

export default PullRequestCard;
