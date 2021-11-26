import React from "react";
import { useDispatch } from "react-redux";
import { fetchMazeAlternatives, maze } from "../reducers/maze";
import styled from "styled-components";
import url0 from "../images/url0.jpg";

const StartBackground = styled.section`
	background-image: url(${url0});
	background-position: center;
	background-size: cover;
	object-fit: cover;
	object-position: center;
	background-repeat: no-repeat;
	height: 100vh;
`;

const WrappingDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const StyledDiv = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.8);
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 5px;
	max-width: 50%;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5px;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5px;
	text-shadow: 1px 1px rgba(225, 225, 225, 0.5);

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const WelcomeText = styled.h1`
	margin: 0;
	padding: 10px;
	color: white;
	text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled.button`
	background-color: lightgrey;
	border-radius: 3px;
	font-family: "Shadows Into Light", cursive;
`;

export const StartPage = () => {
	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		dispatch(maze.actions.setUsername(event.target.value));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(fetchMazeAlternatives());
	};

	return (
		<StartBackground>
			<WrappingDiv>
				<WelcomeText>Want to enter the labyrinth!?</WelcomeText>
				<StyledDiv>
					{/* Remember to use a form tag and the onSubmit event to handle enter clicks AND button clicks in one go */}
					<StyledForm onSubmit={handleSubmit}>
						<StyledLabel>
							Add your username
							<input
								type="text"
								required
								onChange={handleInputChange}
								placeholder="username"
							/>
						</StyledLabel>
						<StyledButton type="submit">Lets go</StyledButton>
					</StyledForm>
				</StyledDiv>
			</WrappingDiv>
		</StartBackground>
	);
};
