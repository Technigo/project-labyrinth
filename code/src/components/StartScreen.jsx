import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import game from '../reducers/game';
import { startGame } from '../reducers/game';

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onUsernameInput = () => {
        dispatch(game.actions.setUsername(inputValue));
        dispatch(startGame());
    }
    
    return (
        <StartContainer>
            <p>Welcome to Labyrinth Game! Please type your gamertag</p>
            <input
                type='text'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                />
            <button onClick={onUsernameInput}>Start the game!</button>
        </StartContainer>
    );
};

const StartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: light;
`;

export default StartScreen;
