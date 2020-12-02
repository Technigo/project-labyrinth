import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { StartGameButton } from 'styled-components/StartGameButton';

import end from '../assets/13.png';

const EndGameContainer = styled.div`
  height: 350px;
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;
  padding: 10%;
  text-align: center;
  background-position: center;

  // Mobile query
  @media (max-width: 767px) {
    width: 85%;
    margin: 0 auto;
    height: 700px;
  }
`;

const DescriptionText = styled.h1`
  background-color: rgba(0, 0, 0, 0.5);

  // Mobile query
  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
    font-size: 18px;
    margin-top: 100px;
  }
`;

export const EndGamePage = () => {
  const globalGameStatus = useSelector((state) => state.gamestate.gameStatus);

  return (
    <EndGameContainer style={{backgroundImage: `url(${end})`}}>
      <DescriptionText>{globalGameStatus.description}</DescriptionText>
      <StartGameButton buttonwidth onClick={() => window.location.reload()}>Start New Game</StartGameButton>
    </EndGameContainer>
  );
};
