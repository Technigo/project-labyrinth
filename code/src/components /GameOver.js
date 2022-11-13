import { useSelector, useDispatch } from 'react-redux';
import { restart } from 'features/game';
//import { game } from 'features/game';

const GameOver = () => {
	const dispatch = useDispatch();
	const initialState = useSelector((state) => state.game.initialState);
	const description = useSelector((state) => state.game.gameStatus.description);

	return (
		<>
			{/* insert img here for winning */}
			<h3>{description}</h3>
			<button onClick={() => dispatch(restart({ initialState }))}>
				Play Again
			</button>
		</>
	);
};

export default GameOver;
