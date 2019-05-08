import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useViewMode } from '../Hooks/useViewMode';
import styled from '../Theme/styled-components';
import { allModes } from '../Hooks/useViewMode';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ModeCard = styled.div<{ active: boolean }>`
  border-radius: 4px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  background-color: ${props => props.theme.colors.light};
  cursor: pointer;

  display: fley;
  align-items: center;
  justify-content: center;

  ${({ active, theme }) =>
    active &&
    `
    cursor: auto;
    border: 2px solid ${theme.colors.secondary}
  `}
`;

const IndexView: React.FC = () => {
  const { mode, setMode } = useViewMode();

  return (
    <Wrapper>
      <div>
        <h1>Please choose your desired mode</h1>
        {allModes.map(m => (
          <ModeCard key={m} onClick={() => setMode(m)} active={m === mode}>
            <FontAwesomeIcon style={{ marginRight: '10px' }} size="2x" icon={m === 'user' ? ['fas', 'user'] : ['fas', 'chart-line']} />
            {m === 'user' ? 'User-Mode' : 'Kiosk-Mode'}
          </ModeCard>
        ))}
      </div>
    </Wrapper>
  );
};

export default IndexView;
