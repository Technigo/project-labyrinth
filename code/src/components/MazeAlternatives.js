import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMazeAlternativesAction } from '../reducers/maze';

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
			{actions.length === 0 && <h3>Yay you made it out!</h3>}
			{actions.length > 0 &&
				actions.map((item) => <ActionCard key={item.direction} {...item} />)}
		</section>
	);
};
