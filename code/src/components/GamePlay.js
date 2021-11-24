import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import styled from "styled-components";

import { nextStep } from "../reducers/game";

const BackgroundImage = styled.div`
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 100vh;
	position: fixed;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: #ffffff;
`;

const Container = styled.main`
	padding: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: scroll;
`;

const TextContainer = styled.div`
	box-sizing: border-box;
	padding: 25px 30px;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 10px;
	margin: 10px;
	> * {
		margin: 0;
		padding: 0;
	}
`;

const Heading = styled.h1`
	font-size: 22px;
`;

const Keyboard = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 75%;
	margin-top: 15px;
	margin-bottom: 20px;
	> * {
		margin: 0;
		padding: 0;
	}
`;

const KeyButton = styled.button`
	grid-column: span 1;
	background: none;
	border: none;
	margin: 1px 3px;
`;

const EmptySpace = styled.div`
	grid-column: span 1;
`;

const ImageButton = styled.img`
	width: 100%;
`;

export const GamePlay = () => {
	const dispatch = useDispatch();
	const currentPosition = useSelector((state) => state.game.currentPosition);
	const loading = useSelector((state) => state.ui.loading);
	const moveDescOne = currentPosition?.actions[0].description;
	const moveDescTwo = currentPosition?.actions[1]?.description;
	const moveDirectionOne = currentPosition?.actions[0].direction;
	const moveDirectionTwo = currentPosition?.actions[1]?.direction;

	return (
		<BackgroundImage image={"./assets/ice-cavern.jpg"}>
			<>
				{loading && <Loader />}
				{currentPosition && (
					<Container>
						<TextContainer>
							<Heading>{currentPosition.description}</Heading>
						</TextContainer>
						{/* <h2>Your current position {currentPosition.coordinates}</h2> */}
						<TextContainer>
							<p>
								{moveDescOne}. If you want to continue on this path go{" "}
								{moveDirectionOne}.
							</p>
							{currentPosition.coordinates !== "0,0" && (
								<p>
									{moveDescTwo}. If you want to continue on this path go{" "}
									{moveDirectionTwo}.
								</p>
							)}
						</TextContainer>
						<Keyboard>
							<EmptySpace></EmptySpace>
							<KeyButton onClick={() => dispatch(nextStep("North"))}>
								<ImageButton src={"./assets/key_up.png"} alt="North" />
							</KeyButton>
							<EmptySpace></EmptySpace>
							<KeyButton onClick={() => dispatch(nextStep("West"))}>
								<ImageButton src={"./assets/key_left.png"} alt="West" />
							</KeyButton>
							<KeyButton onClick={() => dispatch(nextStep("South"))}>
								<ImageButton src={"./assets/key_down.png"} alt="South" />
							</KeyButton>
							<KeyButton onClick={() => dispatch(nextStep("East"))}>
								<ImageButton src={"./assets/key_right.png"} alt="East" />
							</KeyButton>
						</Keyboard>
					</Container>
				)}
			</>
		</BackgroundImage>
	);
};
