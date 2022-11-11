import { useSelector } from 'react-redux';
import GameDisplay from './GameDisplay';
import StartScreen from './StartScreen';

//this page holds the display whether the game starts or not
// page rendered depending on the gameStatus. If null, return startScreen, or else start the game

const Game = () => {
	const gameStatus = useSelector((state) => state.game.gameStatus);
	console.log(gameStatus);
	return <>{gameStatus ? <GameDisplay /> : <StartScreen />}</>;
};

export default Game;
