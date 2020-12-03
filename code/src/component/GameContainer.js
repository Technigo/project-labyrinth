import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game } from '../reducers/game';

import { Button } from './Button'
import { generateNewDirection } from '../reducers/reusable';

import { generateGameStart} from '../reducers/reusable';

export const GameContainer = () => {
    const description = useSelector(store => store.game.description);
    const gameStore = useSelector(store => store.game);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('')
    const username = useSelector(store => store.game.username)

    useEffect(() => {
        onGameGenerate()
    }, [username]) 

    const onGameGenerate = () => {
        dispatch(generateGameStart())
    }

    const setUserName = () => {
        dispatch(game.actions.updateUserName(inputValue))
    }

    const onHistoryBack = () => {
        dispatch(game.actions.historyGoBack());
    }

    const onGameMoveUpdate = (action) => {
        dispatch(generateNewDirection(action))
    }

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
