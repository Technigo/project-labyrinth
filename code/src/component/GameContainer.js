import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { game } from '../reducers/game';
import { generateNewDirection } from '../reducers/reusable';
import { generateGameStart } from '../reducers/reusable';
import { Button } from './Button';

export const GameContainer = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    // Get from store(redux) 
    const gameStore = useSelector(store => store.game);
    const username = useSelector(store => store.game.username);
    const description = useSelector(store => store.game.description);
    const loading = useSelector(store => store.game.isLoading);
    
    // onGameGenerate renders when username is updated
    useEffect(() => {
        onGameGenerate();
    }, [username]) 
    
    // Update store with given username
    const setUserName = () => {
        dispatch(game.actions.updateUserName(inputValue));
    }

    const onGameGenerate = () => {
        // Runs the fetch function generateGameStart from reusable
        dispatch(generateGameStart());
    }

    const onGameMoveUpdate = (action) => {
        // Runs fetch function generateNewDirection with action prop from reusable
        dispatch(generateNewDirection(action));
    }

    const onHistoryBack = () => {
        // Not implemented yet but should return history
        dispatch(game.actions.historyGoBack());
    }

    // When loading is true, show loading
    if(loading) {
        return (
            <div>Loading...</div>
        )
    }

    // When there is a description display description, direction and go back buttons.
    if(description) {
        return (
            <>
                <div>{gameStore.description}</div>
                <Button
                    onButtonClick={onHistoryBack}
                    text='Go Back'
                />
                {gameStore.direction.map(action => {
                    return (
                        <>
                            <button
                                key={action.description}
                                onClick={() => onGameMoveUpdate(action)}
                            >
                                Go {action.direction}
                            </button>
                        </>
                    )
                })}  
            </>
        )} 
    
    // When game is not started (there is no description) display username input field and start game button
    return (
        <div>
            <div>Play the game</div> 
            <input
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
        </div>
    );
}
