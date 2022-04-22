import React from "react";
import { useSelector, useDispatch } from "react-redux";
import game, { playGame } from "reducers/game";
import styled from "styled-components";
import { TextContainer } from "./StartScreen";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 10px;
  background-image: url(../images/image.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  h3 {
    margin: 10px;
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }

  button {
    font-size: 10px;
  }

  @media (min-width: 667px) {
    p {
      font-size: 16px;
    }

    button {
      font-size: 14px;
    }
  }
`;

const GameScreen = () => {
  const gameData = useSelector((store) => store.game.gameData);

  const dispatch = useDispatch();

  const onNextStep = (type, direction) => {
    dispatch(playGame(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
    <div className="action-card">
      <p>{description}</p>
      <button
        onClick={() => onNextStep(type, direction)}
        className="nes-btn is-warning"
      >
        Head {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <GameContainer>
      <TextContainer>
        <p>{gameData.description}</p>
        {gameData.actions.length === 0 && (
          <button
            type="button"
            onClick={() => dispatch(game.actions.resetGame())}
            className="nes-btn is-success"
          >
            RESTART GAME
          </button>
        )}
        {gameData.actions.length > 0 &&
          gameData.actions.map((item) => (
            <ActionCard key={item.direction} {...item} />
          ))}
      </TextContainer>
    </GameContainer>
  );
};

export default GameScreen;
