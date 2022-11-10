import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { DirectionBtn } from '../utils/GlobalStyle'
import PaperScroll from '../assets/paper-scroll.png';
import CompassImg from '../assets/compass.png'
import { generateMoves } from '../reducers/game'

const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  const dispatch = useDispatch();

  console.log(actions);

  return (
    <GameBoardStyle>
      <Scroll>
        <EventText> {description} </EventText>
      </Scroll>
      <CompassWrapper>
        {actions.length > 0 && actions.map((action) => (
          <>
            <DirectionBtn
              north
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <div>
                {action.description}
              </div>

            </DirectionBtn>
            <DirectionBtn
              east
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <p>{action.description}</p>
            </DirectionBtn>
            <DirectionBtn
              west
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <p>{action.description}</p>
            </DirectionBtn>
            <DirectionBtn
              south
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <p>{action.description}</p>
            </DirectionBtn>
            <Compass />
          </>
        ))}
        {/* Compass image and directional texts goes in here */}
      </CompassWrapper>
      <button type="button">Restart game</button>
    </GameBoardStyle>
  );
};

export default GameBoard;

const GameBoardStyle = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
  
  // Flex direction column for mobile?
`;

const Scroll = styled.div`
  background-image: url(${PaperScroll});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 45%; // Need to change width on mobile
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
    height: 50vh;
  }
`;

const EventText = styled.p`
  width: 70%;
  margin: 0 auto;
  padding: 40% 0 50%;
  font-size: 120%;

  @media (max-width: 700px) {
    width: 50%;
    padding: 10% 0 0 0;
    font-size: 100%;
 
  }
`;

const CompassWrapper = styled.div`
width: 50%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Compass = styled.div`
background-image: url(${CompassImg});
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
width: 100%;
height: 100%;
grid-area: 3 / 3 / span 4 / span 4;
`;
