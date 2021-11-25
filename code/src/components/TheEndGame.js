import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gamestate } from "../reducers/gamestate";

import {Container, Wrapper} from "../styled-components/GameWrapperStyling";

export const TheEndGame = () => {
  const currentUser = useSelector((state) => state.gamestate.username);
  const gameStatus = useSelector((state) => state.gamestate.gameStatus);

	const dispatch = useDispatch();

	const onGameRestart = () => {
		dispatch(gamestate.actions.setRestartGame())
	};

  return (
    <Container>
      <Wrapper>
        <h1>Congratulations {currentUser},you made it to the other side!</h1>
        <p>{gameStatus.description}</p>
        <button onClick={onGameRestart}>Play Again</button>
      </Wrapper>
    </Container>  
  );
};
