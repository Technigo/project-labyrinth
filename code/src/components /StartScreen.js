import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { startGame, setUsername } from 'features/game';

const StartScreen = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const inputInfo = () => {
		dispatch(setUsername(input));
		dispatch(startGame());
	};
	return (
		<>
			<div className="start-img">
				{/* <img /> img to show on start screen with the input below */}
			</div>
			<div className="start-input">
				<label>Enter the Maze</label>
				<input
					type="text"
					placeholder="Enter Username"
					required
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button disabled={!input} onClick={() => inputInfo()}>
					Ready, Go!
				</button>
			</div>
		</>
	);
};

export default StartScreen;
