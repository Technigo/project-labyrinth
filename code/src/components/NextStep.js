import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamestate, nextMove } from "../reducers/gamestate";

import { Section,Title, ContentContainer, ActionDescription, Button, Line } from '../styled-components/GameWrapperStyling'

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
    <Section>
			<ContentContainer>
				<Title>{gameStatus.description}</Title>
				<Line></Line>
				<p>Possible actions:</p>
					{gameStatus.actions.map((action, index) => (
						<div key={index}>
							<ActionDescription>{action.description}</ActionDescription>
							{/* passing direction from the user as argument to onNextMove function */}
							<Button onClick={() => onNextMove(action.direction)}>
								<span>Go {action.direction.toUpperCase()}</span>
							</Button>
						</div>
				))}
			</ContentContainer>
    </Section>
  );
};

