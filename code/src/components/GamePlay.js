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
	justify-content: center;
	flex-direction: column;
`;

export const GamePlay = () => {
	const dispatch = useDispatch();
	const currentPosition = useSelector((state) => state.game.currentPosition);
	const loading = useSelector((state) => state.ui.loading);
	const moveDescOne = currentPosition?.actions[0].description;
	const moveDescTwo = currentPosition?.actions[1]?.description;
	const moveDirectionOne = currentPosition?.actions[0].direction;
	const moveDirectionTwo = currentPosition?.actions[1]?.direction;

	// Change the assets to public folder "./assets/ice-cavern.jpg"

	return (
		<BackgroundImage image={require("../assets/ice-cavern.jpg")}>
			{loading && <Loader />}
			{currentPosition && (
				<>
					<h1>{currentPosition.description}</h1>
					<h2>Your current position {currentPosition.coordinates}</h2>
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
					<div>
						<button onClick={() => dispatch(nextStep("North"))}>North</button>
						<button onClick={() => dispatch(nextStep("East"))}>East</button>
						<button onClick={() => dispatch(nextStep("South"))}>South</button>
						<button onClick={() => dispatch(nextStep("West"))}>West</button>
					</div>
					<div></div>
				</>
			)}
		</BackgroundImage>
	);
};
