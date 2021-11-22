import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMazeAlternatives } from '../reducers/maze';

export const MazeAlternatives = () => {
	const maze = useSelector((store) => store.maze.mazeList);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Maze</h1>
			<button
				onClick={() => {
					dispatch(fetchMazeAlternatives());
				}}
			>
				En knapp
			</button>
			{maze?.actions?.map((item) => (
				<p key={item.description}>{item.description}</p>
			))}
			{maze?.actions?.map((item) => (
				<button
					key={item.direction}
					onClick={() => {
						dispatch();
					}}
				>
					{item.direction}
				</button>
			))}
		</>
	);
};
