import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMazeAlternativesAction, maze } from '../reducers/maze';
import { StartPage } from './StartPage';

export const MazeAlternatives = () => {
	const { description, actions } = useSelector(
		(store) => store.maze.currentPosition
	);
	const dispatch = useDispatch();

	const handleButtonClick = (type, direction) => {
		dispatch(fetchMazeAlternativesAction(type, direction));
	};

	const ActionCard = ({ description, type, direction }) => (
		<div>
			<p>{description}</p>
			<button onClick={() => handleButtonClick(type, direction)}>
				{type} {direction.toLowerCase()}
			</button>
		</div>
	);

	return (
		<section>
			<h1>{description}</h1>
			{actions.length === 0 && <h3>Yay you made it out!</h3> && (
				<button onClick={() => dispatch(maze.actions.restart())}>
					Wanna play again?
				</button>
			)}
			{actions.length > 0 &&
				actions.map((item) => <ActionCard key={item.direction} {...item} />)}
		</section>
	);
};
