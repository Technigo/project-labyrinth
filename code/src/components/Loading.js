import React from 'react';
import styled from 'styled-components/macro';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (

    <Animation>
      <Player
        // src="https://assets8.lottiefiles.com/packages/lf20_Jd6zoaTJUO.json"
        // src="https://assets7.lottiefiles.com/packages/lf20_rwq6ciql.json"
        // src="https://assets7.lottiefiles.com/packages/lf20_rwq6ciql.json"
        src="https://assets1.lottiefiles.com/datafiles/WFehw1NDQCkCS14YwuUcdO208wSb4H42N2eOP9u0/Export_lottie/Spinner.json"
        className="lottie"
        loop
        autoplay
        speed={1}
        style={{ height: '500px', width: '500px' }} />
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
// animation-duration: 30s;
`