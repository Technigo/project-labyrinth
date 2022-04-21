import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { labyrinth, continueGame } from '../reducers/labyrinth';
import styled from 'styled-components';
import Loading from 'components/Loading';
import EndOfGame from 'components/EndOfGame';

export const devices = {
  mobile: '(min-width: 375px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1025px)',
};

const GameWrapper = styled.section`
  display: flex;
  background-color: rgb(214, 210, 197, 0.3);
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 20%;
  @media ${devices.tablet} {
    font-size: 25px;
  }
  @media ${devices.desktop} {
    width: 60vw;
    font-size: 25px;
    left: 20%;
  }
`;

export const BtnNavigate = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  margin: 20px;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media ${devices.tablet} {
    width: 200px;
    height: 60px;
    font-size: 25px;
  }
  @media ${devices.desktop} {
    width: 220px;
    height: 50px;
  }
`;

const GameScreen = ({ username }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.labyrinth.currentStep);
  const gameActions = useSelector(
    (store) => store.labyrinth.currentStep.actions
  );
  const history = useSelector((store) => store.labyrinth.history);
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    isLoading === false && (
      <GameWrapper>
        <div>
          <div>{currentStep.description}</div>
          {gameActions.map((action) => (
            <div key={action.description}>
              <p>{action.description}</p>
              <BtnNavigate
                onClick={() =>
                  dispatch(continueGame(action.type, action.direction))
                }
              >
                {action.direction}
              </BtnNavigate>
            </div>
          ))}
          {gameActions.length === 0 && <EndOfGame />}
        </div>
      </GameWrapper>
    )
  );
};

export default GameScreen;
