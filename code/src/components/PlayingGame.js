import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import uniqid from 'uniqid'
import { navigateGame, game } from '../reducers/game'

export const PlayingGame = () => {
  const data = useSelector((store) => store.game.location);
  const actions = useSelector((store) => store.game.step);
  const userName = useSelector((store) => store.game.userName)
  const dispatch = useDispatch();
  // const directionAlternatives = useSelector(
  //   (store) => store.game.data.actions.map((item) => item.direction)
  // )

  const onClick = (direction) => {
    dispatch(game.actions.setStep(direction))
    dispatch(navigateGame(userName, direction))
    console.log(direction)
  }

  const direction = {
    north: 'North',
    west: 'West',
    east: 'East',
    south: 'South'
  }

  return (
    <>
      <GameContainer>
        <GameHeader />
      </GameContainer>
      <p key={data.description}>
      DESCRIPTION: {data.description}
      </p>
      <div key={actions.actions}> Actions:{data.actions.map((location) => {
        return (
          <div key={uniqid()}>
            <p>{location.description}</p>
            <p>Where do you want to go?</p>
          </div>
        );
      })}
      </div>
      <ButtonContainer> Buttons:{data.actions.map(() => {
        return (
          <>
            <button
              key={uniqid()}
              className="directionButton"
              type="button"
              value="north"
              onClick={(e) => onClick(e.target.value)}>
              {/* disabled={!directionAlternatives.includes(Direction.north)}> */}
        GO {direction.north} ↑
            </button>

            <button
              key={uniqid()}
              className="directionButton"
              type="button"
              value="west"
              onClick={(e) => onClick(e.target.value)}>
              {/* disabled={!directionAlternatives.includes(Direction.west)}> */}
        GO {direction.west} ←
            </button>

            <button
              key={uniqid()}
              className="directionButton"
              type="button"
              value="east"
              onClick={(e) => onClick(e.target.value)}>
              {/* disabled={!directionAlternatives.includes(Direction.east)}> */}
        GO {direction.east} →
            </button>

            <button
              key={uniqid()}
              className="directionButton"
              type="button"
              value="south"
              onClick={(e) => onClick(e.target.value)}>
              {/*  disabled={!directionAlternatives.includes(Direction.south)}> */}
        GO {direction.south} ↓
            </button>
          </>
        );
      })}
      </ButtonContainer>
    </>
  )
}

export const GameContainer = styled.div`
`;

export const GameHeader = styled.h1`
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background: #fff08e;
  border: solid 2px #000;
  padding: 15px;
  border-radius: 50%;
  place-items: center;
  position: absolute;
  top: 375px;
  left: 1vw;
  cursor: pointer;
`;

export const Btn = styled.button`
  background: #ffffff;
  grid-area: ${(props) => props.position};
  width: 10px;
  height: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #000;
  
  @media (min-width: 667px) {
    width: 25px;
    height: 25px;
    padding: 30px;
  }
`;

export const MiddeBtn = styled(Btn)`
  grid-area: 2/2;
  width: 100%;
  height: 100%;
  position: relative;
  border: solid 2px #fff;
  &::after {
    content: "";
    width: 35px;
    height: 35px;
    background: #000;
    border-radius: 50%;
    position: absolute;
  }
  @media (min-width: 667px) {
    &:after {
      width: 45px;
      height: 45px;
    }
  }
`;

