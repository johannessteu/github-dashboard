import React from 'react';
import styled from '../../Theme/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpinnerWrapper = styled.div`
  animation-name: spin;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin: 0 auto;
  color: ${props => props.theme.colors.dark};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <FontAwesomeIcon icon={['fas', 'spinner']} size="2x" />
    </SpinnerWrapper>
  );
};

export default Spinner;
