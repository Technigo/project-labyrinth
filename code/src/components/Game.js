import React from 'react';
import { useSelector } from 'react-redux';

import { StartPage } from './StartPage';
import { MazeAlternatives } from './MazeAlternatives';
import { LoadingIndicator } from './LoadingIndicator';

export const Game = () => {
	const currentPosition = useSelector((store) => store.maze.currentPosition);

	return (
		<>
			{currentPosition ? <MazeAlternatives /> : <StartPage />}
			<LoadingIndicator />
		</>
	);
};
