import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMazeAlternativesAction, maze } from "../reducers/maze";
import styled from "styled-components";

import url1 from "../images/url1.jpg";
import url2 from "../images/url2.jpg";
import url3 from "../images/url3.jpg";
import url4 from "../images/url4.jpg";
import url5 from "../images/url5.jpg";
import url6 from "../images/url6.jpg";
import url7 from "../images/url7.jpg";

const MazeBackground = styled.section`
	background-position: center;
	background-size: cover;
	object-fit: cover;
	object-position: center;
	background-repeat: no-repeat;
	height: 100vh;
`;

const WrappingMazeDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100vw;
	height: 100vh;
`;

const StyledMazeDiv = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.8);
	width: fit-content;
	max-width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 5px;

	@media (min-width: 768px) {
		min-width: 600px;
		padding: 30px;
	}
`;

const DescriptionText = styled.h1`
	margin: 0;
	padding: 10px;
	color: white;
	max-width: 70%;
	text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`;

const StyledDescription = styled.p`
	text-shadow: 1px 1px rgba(225, 225, 225, 0.5);
`;

const StyledButton = styled.button`
	background-color: lightgrey;
	border-radius: 3px;
	font-family: "Shadows Into Light", cursive;
`;

export const MazeAlternatives = () => {
	const { description, coordinates, actions } = useSelector(
		(store) => store.maze.currentPosition
	);
	const dispatch = useDispatch();

	const handleButtonClick = (type, direction) => {
		dispatch(fetchMazeAlternativesAction(type, direction));
	};

	const backgroundImage = () => {
		let bg = "";
		switch (coordinates) {
			case "0,0":
				bg = url1;
				break;
			case "1,0":
				bg = url2;
				break;
			case "1,1":
				bg = url3;
				break;
			case "0,1":
				bg = url4;
				break;
			case "0,2":
				bg = url5;
				break;
			case "0,3":
				bg = url6;
				break;
			case "1,3":
				bg = url7;
				break;
			default:
				return url7;
		}
		return bg;
	};

	const ActionCard = ({ description, type, direction }) => (
		<>
			<StyledDescription>{description}</StyledDescription>
			<StyledButton onClick={() => handleButtonClick(type, direction)}>
				{type} {direction.toLowerCase()}
			</StyledButton>
		</>
	);

	return (
		<MazeBackground
			coordinates={coordinates}
			style={{ backgroundImage: `url(${backgroundImage()})` }}
		>
			<WrappingMazeDiv>
				<DescriptionText>{description}</DescriptionText>
				<StyledMazeDiv>
					{actions.length === 0 && <h3>Yay you made it out!</h3> && (
						<StyledButton onClick={() => dispatch(maze.actions.restart())}>
							Wanna play again?
						</StyledButton>
					)}
					{actions.length > 0 &&
						actions.map((item) => (
							<ActionCard key={item.direction} {...item} />
						))}
				</StyledMazeDiv>
			</WrappingMazeDiv>
		</MazeBackground>
	);
};
