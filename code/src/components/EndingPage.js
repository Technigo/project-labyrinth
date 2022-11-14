import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/GlobalStyles';

// This will refresh the whole page
const onRestartBtn = () => {
  window.location.reload();
}

export const EndingPage = () => {
  return (
    <RestartWrapper>
      <Button
        type="button"
        onClick={onRestartBtn}>Restart
      </Button>
    </RestartWrapper>
  )
}

const RestartWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  width: 80%;
  margin: 2em auto;
`