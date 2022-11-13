import { useDispatch, useSelector } from 'react-redux';
import GameOver from './GameOver';
import { makeMoves } from 'features/game';
import Loading from './Loading';
//import Loading.js

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
		<div className="main-2">
			<h3 className="nes-balloon from-left nes-pointer">{description}</h3>
			<div className="direction-wrapper">
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
							<div className="bordered">
								<h3 className="nes-container is-rounded is-dark">
									{description}
								</h3>
							</div>
							<div className="position-wrapper">
								<h3 className="position-text">Coordinates:</h3>

								<h3 className="nes-badge">
									<span className="is-success">{coordinates}</span>
								</h3>
							</div>
							<div className="img-container">
								<img
									className="cavern"
									src="https://i.ibb.co/W3D338W/cavern.png"
									alt="cavern"
								/>
							</div>
						</>
					)}
					{actions.length === 0 ? (
						<div>
							<End />
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
