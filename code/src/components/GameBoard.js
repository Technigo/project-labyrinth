/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../utils/GlobalStyle';
import PaperScroll from '../assets/paper-scroll.png';
import CompassImg from '../assets/compass.png';
import game, { generateMoves } from '../reducers/game';

const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(game.actions.restartGame());
  };

  console.log(actions);

  return (
    <GameBoardStyle>
      <ScrollWrapper>
        <Scroll>
          <EventText> {description}</EventText>
          <Button restart type="button" onClick={onRestartButton}>
            Restart game
          </Button>
        </Scroll>
      </ScrollWrapper>
      <CompassWrapper>
        {actions.length > 0 &&
          actions.map((action) => (
            <>
              <Button
                className={action.direction}
                direction={action.direction}
                key={action.direction}
                onClick={() => dispatch(generateMoves(action.direction))}
              >
                <div>{action.description}</div>
              </Button>
              <Compass />
            </>
          ))}
      </CompassWrapper>
    </GameBoardStyle>
  );
};

export default GameBoard;

const GameBoardStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ScrollWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;

  /* mobile and tablet styling */
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0% auto;
  }

  /* big desktop */
  @media (min-width: 1300px) {
    /* margin: -5% auto; */
  }
`;
const Scroll = styled.div`
  /* for desktop */
  display: flex;
  align-items: center;
  background-image: url(${PaperScroll});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 80%;
  min-height: 500px;
  text-align: center;
  margin: 0;
  padding: 0;

  /* phone styling */
  @media (max-width: 667px) {
    width: 100%;
    height: 60vh;
    min-height: unset;
  }

  /* tablet styling */
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 100%;
    height: 50vh;
    min-height: unset;
  }
  /* big desktop */
  @media (min-width: 1300px) {
    height: 75vh;
  }
`;

const EventText = styled.p`
  /* Desktop styling */
  width: 65%;
  margin: auto;
  font-size: 120%;
  max-width: 600px;

  /* Mobile Styling*/
  @media (max-width: 499px) {
    width: 65%;
    font-size: 100%;
    margin: 0 auto;
    overflow: scroll;
    height: 40%;
  }
  

  /* Tablet Styling */
  @media (min-width: 500px) and (max-width: 1023px) {
    max-width: 275px;
    margin: 3vh auto;
    font-size: 100%;
  }

  
`;

/* Styling fow button and compass image wrapper, grid layout */
const CompassWrapper = styled.div`
  width: 50%;
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  /* media query big desktop */
  @media (min-width: 1300px) {
    height: 100vh;
  }
  /* media query mobile */
  @media (max-width: 667px) {
    height: 75vh;
    width: 100%;
    grid-template-rows: repeat(4, 1fr);
  }
  /* media query tablet */
  @media (min-width: 668px) and (max-width: 1024px) {
    height: 50vh;
    width: 100%;
    grid-template-rows: repeat(4, 1fr);
  }


/* placement for all of the direction buttons, normal and media queries */
  .North {
    grid-area: 1 / 3 / span 2 / span 4;
    @media (max-width: 1024px) {
      grid-area: 1 / 3 / span 1 / span 4;
    }
  }
  .East {
    grid-area: 4 / 7 / span 2 / span 3;
    @media (max-width: 1024px) {
      grid-area: 2 / 6 / span 2 / span 3;
    }
  }
  .West {
    grid-area: 4 / 1 / span 2 / span 2;

    @media (max-width: 1024px) {
      grid-area: 2 / 1 / span 2 / span 3;
    }
  }
  .South {
    grid-area: 7 / 3 / span 2 / span 4;

    @media (max-width: 1024px) {
      grid-area: 4 / 3 / span 1 / span 4;
    }
  }
`;

/* styling and placement for compass image */
const Compass = styled.div`
  background-image: url(${CompassImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  grid-area: 3 / 3 / span 4 / span 4;

  /* Media query for phone and tablet  */
  @media (max-width: 1024px) {
    grid-area: 2 / 4 / span 2 / span 2;
  }
`;
