import React from 'react';
import styled from 'styled-components/macro';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (

    <Animation>
      <Player
        src="https://assets1.lottiefiles.com/datafiles/WFehw1NDQCkCS14YwuUcdO208wSb4H42N2eOP9u0/Export_lottie/Spinner.json"
        className="lottie"
        loop
        autoplay
        speed={1}
        style={{ height: '400px', width: '400px' }} />
    </Animation>
  );
}

export default Loading

const Animation = styled.div`
background-color: black;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 9999;
`