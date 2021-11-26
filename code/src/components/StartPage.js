import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMazeAlternatives, maze } from '../reducers/maze';
import styled from 'styled-components';
import url0 from '../images/url0.jpg';

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
	background-color: rgba(255, 255, 255, 0.3);
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.8);
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

const WelcomeText = styled.h1`
	margin: 0;
	padding 10px;
	color: white;
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
					<form onSubmit={handleSubmit}>
						<label>
							Add your username
							<input type="text" required onChange={handleInputChange} />
						</label>
						<button type="submit">Lets go</button>
					</form>
				</StyledDiv>
			</WrappingDiv>
		</StartBackground>
	);
};
