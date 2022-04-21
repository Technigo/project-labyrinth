import React from "react";
// import { CardContainer, Title, Gif, GifWrapper, Overlay, Content, OverlayWrapper } from "./Styles";
// import { useSelector, useDispatch } from "react-redux";
// import labyrinth from "reducers/labyrinth";


// const GameOver = () => {
// 	const stage = useSelector(store => store.labyrinth.stage);

// 	const dispatch = useDispatch();

// 	const onResetGame = () => {
// 		dispatch(labyrinth.actions.setRestartGame());
// 	}

// 	return (
// 		<CardContainer>
// 			<Content>
// 				<Title>
// 					{stage.description}
// 				</Title>
// 				<GifWrapper onClick={onResetGame} backgroundURL={'https://embed.lottiefiles.com/animation/53040'}>
// 					<OverlayWrapper>
// 						<Overlay />
// 						<Gif src='https://embed.lottiefiles.com/animation/53040'></Gif>
// 					</OverlayWrapper>
// 				</GifWrapper>
// 			</Content>
// 		</CardContainer>
// 	)
// }
import labyrinth from "reducers/labyrinth";
import { CardContainer, Title } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import { EndGame } from "./Styles";
import { Button } from "./Styles";

const GameOver = () => {
	const stage = useSelector((store) => store.labyrinth.stage);
	const dispatch = useDispatch();

	const onRestart = () => {
		dispatch(labyrinth.actions.setRestartGame());
	};

	return (
		<CardContainer>
		<EndGame>
			<Title>
			<p>{stage.description}</p>
			</Title>
			<iframe src="https://embed.lottiefiles.com/animation/53040" title="game over"></iframe>
		</EndGame>
		<Button onClick={onRestart}>Restart the game</Button>
		</CardContainer>
	);
};

export default GameOver;
