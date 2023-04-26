import React from 'react';
import styled from 'styled-components/macro';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (

    <Animation>
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_Jd6zoaTJUO.json"
        className="compass"
        autoplay
        speed={0}
        style={{ height: '100vh', width: '100vw' }} />
    </Animation>
  );
}

export default Loading

const Animation = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`