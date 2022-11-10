import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { startGame, setUsername } from 'features/game';

const StartScreen = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const inputInfo = () => {};
};

export default StartScreen;
