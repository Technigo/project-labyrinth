/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import { Background, StartBtn } from './StartPage';
import { GameCard } from './StyledComponents';
import castle from '../assets/castle.jpeg';

const LastPage = () => {
  const username = useSelector((store) => store.game.username);
  const currentPosition = useSelector((store) => {
    return store.game.currentPosition;
  });

  return (
    <LastClonedBackground>
      <GameCard title={`Congratulations ${username} you made it!`}>
        <div>
          <div>
          <p>{currentPosition.description}
          </p>
          </div>
          <div>
            <LastButton onClick={() => window.location.reload()}>Play Again!</LastButton>
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
const LastButton = styled(StartBtn)`
  background-color: #5FE9F7;
  border-color: #91F1FF;
  box-shadow: 8px 10px 12px #7DCBFF;
  width: 140px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: black;
`