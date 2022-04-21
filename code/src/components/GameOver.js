import React from "react";
import { CardContainer, Title, Gif, GifWrapper, Overlay, Content, OverlayWrapper } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import labyrinth from "reducers/labyrinth";


const GameOver = () => {
	const stage = useSelector(store => store.labyrinth.stage);

	const dispatch = useDispatch();

	const onResetGame = () => {
		dispatch(labyrinth.actions.setRestartGame());
	}

	return (
		<CardContainer>
			<Content>
				<Title>
					{stage.description}
				</Title>
				<GifWrapper onClick={onResetGame} backgroundURL={'https://embed.lottiefiles.com/animation/53040'}>
					<OverlayWrapper>
						<Overlay />
						<Gif src='https://embed.lottiefiles.com/animation/53040'></Gif>
					</OverlayWrapper>
				</GifWrapper>
			</Content>
		</CardContainer>
	)
}

export default GameOver;