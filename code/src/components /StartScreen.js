import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { startGame, setUsername } from 'features/game';
import styled from 'styled-components/macro';

const StartInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;

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
			<StartInput>
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
			</StartInput>
		</>
	);
};

export default StartScreen;
