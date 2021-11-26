import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { StartPage } from './StartPage';
import { MazeAlternatives } from './MazeAlternatives';
import { LoadingIndicator } from './LoadingIndicator';

const BiggestLoadingBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export const Game = () => {
	const currentPosition = useSelector((store) => store.maze.currentPosition);

	return (
		<BiggestLoadingBox>
			<LoadingIndicator />
			{currentPosition ? <MazeAlternatives /> : <StartPage />}
		</BiggestLoadingBox>
	);
};
