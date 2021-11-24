import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchMazeAlternatives,
	fetchMazeAlternativesAction,
} from '../reducers/maze';

export const MazeAlternatives = () => {
	const maze = useSelector((store) => store.maze.mazeList);
	const dispatch = useDispatch();

	return (
		<>
			{/* kanske måste dispatchea så loadingen syns? lade den andra apin i maze  */}
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
						dispatch(fetchMazeAlternativesAction(item.direction));
					}}
				>
					{item.direction}
				</button>
			))}
		</>
	);
};
