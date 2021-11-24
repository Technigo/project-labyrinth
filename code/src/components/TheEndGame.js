import React from "react";
import { useSelector, useDispatch } from "react-redux";
 
export const TheEndGame = () => {
  const currentUser = useSelector((state) => state.gamestate.username);
  const gameStatus = useSelector((state) => state.gamestate.gameStatus);

	const dispatch = useDispatch();

	const onGameRestart = () => {
		dispatch(gamestate.actions.setRestartGame())
	}

  return (
    <>
      <p>Congratulations {currentUser}, you made it to the other side!</p>
      <p>{gameStatus.description}</p>
            <button onClick={onGameRestart}>Restart</button>
    </>
  );
};
