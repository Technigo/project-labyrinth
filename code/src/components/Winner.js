import React from 'react';
import styled from 'styled-components';

const WinnerBox = styled.div`
  z-index: 5;
  background: green;
`;

const Winner = () => {
  return (
    <WinnerBox>
      <p>Winner!</p>
    </WinnerBox>
  );
};

export default Winner;
