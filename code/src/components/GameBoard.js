import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import PaperScroll from '../assets/paper-scroll.png';

const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);

  console.log(actions);

  return (
    <GameBoardStyle>
      <Scroll>
        <EventText> {description} </EventText>
      </Scroll>
      <CompassWrapper>
        {/* Compass image and directional texts goes in here */}
        <p>hejhej hjälpa mig kompis</p>
      </CompassWrapper>
    </GameBoardStyle>
  );
};

export default GameBoard;

const GameBoardStyle = styled.div`
  display: flex;
  flex-direction: row;

  // Flex direction column for mobile?
`;

const Scroll = styled.div`
  background-image: url(${PaperScroll});
  background-repeat: no-repeat;
  background-size: contain;
  /* object-fit: contain; */
  background-position: center center;
  width: 60%; // Need to change width on mobile
  text-align: center;
`;

const EventText = styled.p`
  width: 70%;
  margin: 0 auto;
  padding: 40% 0 50%;
  font-size: 125%;
`;

const CompassWrapper = styled.div`
  height: 100%;
  width: 40%;

  text-align: center;
`;
