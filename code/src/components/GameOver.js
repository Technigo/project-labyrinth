import React from "react";
import { useSelector, useDispatch } from "react-redux";

import labyrinth from "reducers/labyrinth";

import { CardContainer, Button, EndGame, EndTitle } from "./Styles";

const GameOver = () => {
	const stage = useSelector((store) => store.labyrinth.stage);
	const dispatch = useDispatch();

	const onRestart = () => {
		dispatch(labyrinth.actions.setRestartGame());
	};

	return (
		<CardContainer>
		<EndGame>
			<EndTitle>
				<p>{stage.description}</p>
			</EndTitle>
			<iframe src="https://embed.lottiefiles.com/animation/53040" title="game over"></iframe>
		</EndGame>
		<Button onClick={onRestart}>Restart the game</Button>
		</CardContainer>
	);
};

export default GameOver;
