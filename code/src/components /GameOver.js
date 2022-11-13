import { useSelector, useDispatch } from 'react-redux';
import { restart } from 'features/game';
import styled from 'styled-components';

const GameOver = () => {
	const dispatch = useDispatch();
	const initialState = useSelector((state) => state.game.initialState);
	const description = useSelector((state) => state.game.gameStatus.description);

	return (
		<GameOverStyle>
			<h3>{description}</h3>
			<button onClick={() => dispatch(restart({ initialState }))}>
				Play Again
			</button>
		</GameOverStyle>
	);
};

const GameOverStyle = styled.div`
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
`;

export default GameOver;
