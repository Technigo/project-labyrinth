import React from 'react';
import styled from 'styled-components/macro';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (
    <StyledAnimation>
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_3e0g4gjg.json"
        className="Player"
        autoplay
        speed={2}
        style={{ height: '300px', width: '300px' }} />
    </StyledAnimation>
  )
}

export default Loading

const StyledAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`