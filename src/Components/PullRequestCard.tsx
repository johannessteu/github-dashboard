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
  font-size: 20px;

  img {
    margin-right: 10px;
  }
`;
const Section = styled.div`
  border-top: 1px solid ${props => props.theme.colors.contrast};
  padding: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const ReviewCount = styled.div<{ count: number }>`
  display: inline-flex;
  align-items: flex;
  padding: 10px;
  margin-right: 20px;
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  background-color: ${props => (props.count > 0 ? props.theme.colors.success : props.theme.colors.error)};
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
        <FontAwesomeIcon style={{ marginRight: '10px' }} icon={['fas', 'code-branch']} />
        {props.baseRefName} <FontAwesomeIcon style={{ margin: '0 10px' }} icon={['fas', 'arrow-circle-left']} /> {props.headRefName.substring(0, 30)}
        {props.headRefName.length > 30 && '...'}
      </Section>
      <Section>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <ReviewCount count={1}>
              <FontAwesomeIcon icon={['fas', 'check-double']} size="1x" />
            </ReviewCount>
            {props.reviews.nodes.map(n => (n.state === 'APPROVED' ? <Avatar key={n.author.avatarUrl} size={36} src={n.author.avatarUrl} /> : null))}
          </div>
          <div style={{ display: 'flex' }}>
            <ReviewCount count={0}>
              <FontAwesomeIcon icon={['fas', 'check-double']} size="1x" />
            </ReviewCount>
            {props.reviews.nodes.map(n => (n.state === 'CHANGES_REQUESTED' ? <Avatar key={n.author.avatarUrl} size={36} src={n.author.avatarUrl} /> : null))}
          </div>
        </div>
      </Section>
      <MergeButton target="_blank" href={props.permalink} mergeState={mergeState}>
        <FontAwesomeIcon icon={['fas', mergeIcon]} size="2x" />
      </MergeButton>
    </PullRequestWrapper>
  );
});

export default PullRequestCard;
