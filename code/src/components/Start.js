import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { startGame, gamereducer } from 'reducers/gamereducer';

const Start = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const onUsernameSet = () => {
		dispatch(gamereducer.actions.setUsername(inputValue));
		dispatch(startGame());
	};

	return (
		<div className='main-container'>
			<div className='start-container'>
				<h1>Welcome to the Maze</h1>
				<p>Do you dare to enter? </p>
				&nbsp;
				<input
					className='start-input'
					type='text'
					placeholder='Type your username'
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>
				&nbsp;
				<button className='start-button' onClick={onUsernameSet}>
					START
				</button>
			</div>
		</div>
	);
};

export default Start;
