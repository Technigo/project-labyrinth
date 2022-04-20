import React from "react";
import { useSelector, useDispatch } from "react-redux";

import game, { continueGame } from "../reducers/game";

const GameScreen = () => {
  const currentStep= useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  const userActions = useSelector ((store) => store.game.currentStep.actions)

  const dispatch = useDispatch();

  const onGameRegenerate = (GameTag) => {
    dispatch(continueGame(GameTag));
  };

  const onGameRevert = () => {
    dispatch(game.actions.setPreviousGame());
  };

  return (
    <div>
      <button disabled={!history.length} onClick={onGameRevert}>
        Go back
      </button>
      <h3> Test! {currentStep.description}</h3>
      {userActions.map((action) => (
        <button key={action.description} onClick={() => onGameRegenerate(description)}>
          {description}
        </button>
      ))}
    </div>
  );
};

export default GameScreen;
