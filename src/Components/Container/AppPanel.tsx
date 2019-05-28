import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from '../../Theme/styled-components';
import { ViewMode, allModes, useViewMode } from '../../Hooks/useViewMode';
import { useCurrentUser } from '../../Hooks/useCurrentUser';

const Panel = styled.div<{ mode: ViewMode }>`
    position: fixed;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    top: 0px;
    right: 0px;
    left: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    margin: 0px;
    padding: 0px 20px;
    background: #ffffff;

    ${({ mode, theme }) => {
      if (mode === 'kiosk') {
        return `
            width: auto
        `;
      }
    }}
}
`;

const ModeButton = styled.button`
  border-radius: 2px;
  background-color: ${props => props.theme.colors.light} 
  border: 2px solid ${props => (props.disabled ? props.theme.colors.main : props.theme.colors.light)};
  height: 30px;
  color: ${props => props.theme.colors.dark}
`;

const Avatar = styled.img`
  border-radius: 50%
  height: 30px;
  width: 30px;
  margin: 0 5px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Organization = styled.img<{ selected: boolean }>`
  border-radius: 50%
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin: 0 5px;
  opacity: .7;
  border: 2px solid #fff;

  ${({ selected, theme }) =>
    selected &&
    `
    opacity: 1;
    border: 2px solid ${theme.colors.main}
`}
`;

const AppPanel: React.FC = () => {
  const { mode, setMode } = useViewMode();
  const { user, selectedOrganizations, setInitialOrganizations, selectOrganization, deselectOrganization } = useCurrentUser();

  useEffect(() => {
    // initial set all selectedOrganizations
    const orgs = user.organizations.map(org => org.name);
    setInitialOrganizations(orgs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel mode={mode}>
      <div>
        {allModes.map(m => (
          <ModeButton key={m} disabled={mode === m} onClick={() => setMode(m)}>
            <FontAwesomeIcon icon={m === 'user' ? ['fas', 'user'] : ['fas', 'chart-line']} />
          </ModeButton>
        ))}
      </div>
      <div>
        <Organization selected={selectedOrganizations.length === 0} onClick={() => setInitialOrganizations([])} src={user.avatarUrl || undefined} />
        {user.organizations.map((organization, idx) => {
          if (selectedOrganizations.indexOf(organization.name) >= 0) {
            return <Organization key={idx} selected onClick={() => deselectOrganization(organization.name)} src={organization.avatarUrl} />;
          } else {
            return <Organization key={idx} selected={false} onClick={() => selectOrganization(organization.name)} src={organization.avatarUrl} />;
          }
        })}
      </div>
      <UserWrapper>
        <Avatar style={{ marginRight: '10px' }} src={user.avatarUrl || undefined} alt={user.name || ''} />
        {user.name}
      </UserWrapper>
    </Panel>
  );
};

export default AppPanel;
