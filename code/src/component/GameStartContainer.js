import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { game } from '../reducers/game';
import { Button } from './Button';
import { StartGameScreen, StartGameCard, StartText, Input } from '../styling/startscreen';

export const GameStartContainer = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    // Update store with given username
    const setUserName = () => {
        dispatch(game.actions.updateUserName(inputValue));
    }

    return (
        <StartGameScreen>
            <StartGameCard>
                <StartText>WELCOME</StartText> 
                <Input
                    type='text'
                    placeholder='Type your username'
                    value={inputValue}
                    required
                    onChange={e => setInputValue(e.target.value)}
                />
                <Button
                    onButtonClick={setUserName}
                    text='Start game'
                />
            </StartGameCard>    
        </StartGameScreen>
    );
};


