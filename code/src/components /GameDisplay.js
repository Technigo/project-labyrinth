import { useDispatch, useSelector } from 'react-redux';
import GameOver from './GameOver';
import { makeMoves } from 'features/game';
import Loading from './Loading';

const GameDisplay = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.game.loading);
	const description = useSelector((state) => state.game.gameStatus.description); //from json
	const coordinates = useSelector((state) => state.game.gameStatus.coordinates); //from json
	const actions = useSelector((state) => state.game.gameStatus.actions); //from json

	const handleClick = (type, direction) => {
		dispatch(makeMoves(type, direction));
	};

	const GameSteps = ({ description, type, direction }) => (
		<div>
			<h3>{description}</h3>
			<div>
				<button
					id="direction"
					className="nes-btn is-primary"
					onClick={() => handleClick(type, direction)}
				>
					{type} {direction}
				</button>
			</div>
		</div>
	);
	return (
		<div className="main">
			{loading && <Loading />}
			{!loading && (
				<div className="content">
					{actions.length !== 0 && (
						<>
							<div>
								<h3>{description}</h3>
							</div>
							<div>
								<h3>Coordinates:{coordinates}</h3>
							</div>
							{/* <div className="img-container">
								<img/>
							</div> */}
						</>
					)}
					{actions.length === 0 ? (
						<div>
							<GameOver />
						</div>
					) : (
						actions.length > 0 &&
						actions.map((item) => <GameSteps key={item.direction} {...item} />)
					)}
				</div>
			)}
		</div>
	);
};

export default GameDisplay;
