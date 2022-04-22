import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { startGame, gamereducer } from 'reducers/gamereducer';
import { LoadingIndicator } from './Loader';
import { useSelector } from 'react-redux';
import Maze from './Maze';

const Start = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();
	const loading = useSelector((store) => store.gamereducer.loading);
	const hasUsername = useSelector((store) => store.gamereducer.username);

	const onUsernameSet = () => {
		dispatch(gamereducer.actions.setUsername(inputValue));
		dispatch(startGame());
	};

	if (loading) {
		return <LoadingIndicator />;
	}
	if (!hasUsername) {
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
	} else {
		return <Maze />;
	}
};

export default Start;
