import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamestate, nextMove } from "../reducers/gamestate";

import {Container, Wrapper } from '../styled-components/GameWrapperStyling'

//import { Section,Title, ContentContainer, ActionDescription, Button, Line } from '../styled-components/GameWrapperStyling'

export const NextStep = () => {
	
  const gameStatus = useSelector((state) => state.gamestate.gameStatus);
  const currentUser = useSelector((state) => state.gamestate.username);

  const dispatch = useDispatch();
	/* this function takes in direction as an argument, and passing it to the nextMove function, which is our fetch function */
  const onNextMove = (direction) => {
    dispatch(nextMove(currentUser, direction));
    dispatch(gamestate.actions.setLoading(true));
  };

  return (
    <Container>
			<Wrapper>
				<h1>{gameStatus.description}</h1>
				<hr></hr>
				<p>Possible actions:</p>
					{gameStatus.actions.map((action, index) => (
						<div key={index}>
							<p>{action.description}</p>
							{/* passing direction from the user as argument to onNextMove function */}
							<button onClick={() => onNextMove(action.direction)}>
								Go {action.direction.toUpperCase()}
							</button>
							<hr></hr>
						</div>
				))}
			</Wrapper>
    </Container>
  );
};



