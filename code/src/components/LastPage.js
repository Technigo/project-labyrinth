/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector } from 'react-redux';
/* import Lottie from 'react-lottie'; */
import styled from 'styled-components/macro'
// import animationData from '../lotties/castle';
import { Background } from './StartPage';
import { GameCard } from './StyledComponents';
import castle from '../assets/castle.jpeg';

const LastPage = () => {
  const username = useSelector((store) => store.ui.username);

  /* const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }; */

  return (
    <LastClonedBackground>
      <GameCard>
        <div>
          <div>
            {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
            <div>{username}</div>
            <button onClick={() => window.location.reload()}>Play Again!</button>
          </div>
        </div>
      </GameCard>
    </LastClonedBackground>
  );
};

export default LastPage;

const LastClonedBackground = styled(Background)`
  background-image: url(${castle});
`