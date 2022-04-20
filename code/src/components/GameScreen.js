import React from "react";
import { useSelector, useDispatch } from "react-redux";

import game, { continueGame } from "../reducers/game";

const GameScreen = ({username}) => {
  const currentStep= useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  const userActions = useSelector ((store) => store.game.currentStep.actions)
  
  const dispatch = useDispatch();
  
  const onGameRevert = () => {
    dispatch(game.actions.setHistory());
  };

  return (
    <div>
        <button disabled={!history.length} onClick={onGameRevert}>
        Go back
      </button>
      
        <h2>Hello {username}</h2>
      <h3>{currentStep.description}</h3>
      {userActions.map((action) => (
          <div key={action.direction}>
              <p>{action.description}</p>
              <button onClick={() =>
                dispatch(continueGame(action.type, action.direction)) }>
                  Go to {action.direction}
              </button>

          </div>
      ))}
    </div>
  )
  
};

export default GameScreen;
