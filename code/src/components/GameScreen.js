import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playGame } from "reducers/game";

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
    <div>
      {/* <h1> Welcome {username}</h1> */}
      <h3>Now the adventure begins</h3>
      <h3>{gameData.description}</h3>
      {gameData.actions.map((item) => (
        <ActionCard key={item.direction} {...item} />
      ))}
    </div>
  );
};

export default GameScreen;
