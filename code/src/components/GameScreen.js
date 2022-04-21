import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playGame } from "reducers/game";
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 10px;

  h3 {
    margin: 10px;
    font-size: 16px;
  }

  h4 {
    margin: 10px;
    font-size: 16px;
  }

  p {
    font-size: 16px;
  }
`;

const GameScreen = () => {
  const gameData = useSelector((store) => store.game.gameData);
  //   const history = useSelector((store) => store.game.history);
  //   const username = useSelector((store) => store.game.username);

  const dispatch = useDispatch();

  const onNextStep = (type, direction) => {
    dispatch(playGame(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
    <div className="action-card">
      <p>{description}</p>
      <button onClick={() => onNextStep(type, direction)}>
        Head {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <GameContainer>
      {/* <h1> Welcome {username}</h1> */}
      <h3>Now the adventure begins</h3>
      <h4>{gameData.description}</h4>
      {gameData.actions.map((item) => (
        <ActionCard key={item.direction} {...item} />
      ))}
    </GameContainer>
  );
};

export default GameScreen;
