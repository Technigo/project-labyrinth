import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../utils/GlobalStyle'
import PaperScroll from '../assets/paper-scroll.png';
import CompassImg from '../assets/compass.png'
import game, { generateMoves } from '../reducers/game'

const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(game.actions.setUsername(''))
    dispatch(game.actions.restartGame())
    /* window.location.reload() */
  }

  console.log(actions);

  return (
    <GameBoardStyle>
      <ScrollWrapper>
        <Scroll>
          <EventText> {description}
          </EventText>
          <Button restart type="button" onClick={onRestartButton}>Restart game</Button>
        </Scroll>
      </ScrollWrapper>
      <CompassWrapper>
        {actions.length > 0 && actions.map((action) => (

          /* it now maps both of the direction in the button,
          but we only want it to map one direction in one button.
           Do you have any idea how we can have one direction
           per button and also at the right direction?
           And also disable the buttons not in use */
          <>
            <Button
              north
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <div>
                {action.description}
              </div>

            </Button>
            <Button
              east
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <p>{action.description}</p>
            </Button>
            <Button
              west
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <p>{action.description}</p>
            </Button>
            <Button
              south
              key={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              <p>{action.description}</p>
            </Button>
            <Compass />
          </>
        ))}
        {/* Compass image and directional texts goes in here */}
      </CompassWrapper>
    </GameBoardStyle>
  );
};

export default GameBoard;

const GameBoardStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

 /*  @media (max-width: 700px) {
    flex-wrap: wrap;
  } */
  
  // Flex direction column for mobile?
`;

const ScrollWrapper = styled.div`
width: 50%;
margin: 0 auto;

@media (max-width: 700px) {
    width: 100%;
  }
`;

const Scroll = styled.div`
  background-image: url(${PaperScroll});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  /* height: 100%; */
  width: 100%; // Need to change width on mobile
  text-align: center;
  margin: 0;
  padding: 0;

  @media (max-width: 700px) {
    width: 100%;
    height: 50vh;
  }
`;

const EventText = styled.p`
  width: 95%;
  margin:25vh auto;
  padding-top: 25vh;
  font-size: 120%;

  @media (max-width: 700px) {
    width: 50%;
    font-size: 100%;
    padding-top: 15vh;
    margin:0 auto;
 
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
    grid-template-rows: repeat(4, 1fr);
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

@media (max-width: 700px) {
  grid-area: 2 / 4 / span 2 / span 2;
  }
`;
