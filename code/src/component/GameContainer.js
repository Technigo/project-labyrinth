import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

import { game } from '../reducers/game';
import { generateNewDirection } from '../reducers/reusable';
import { generateGameStart } from '../reducers/reusable';
import { Button } from './Button';



const GameScreen = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StartGameCard = styled.div`
    width: 300px;
    height: 500px;
    background-color: #901F32;
    border: 3px solid #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StartText = styled.h1`
    color: #fff;
`

const DescriptionText = styled.p`
    color: #fff;
`

const MoveButton = styled.button`
    
`

const Wrapper = styled.div`
    color: black;
`

export const GameContainer = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [actionDescription, setActionDescription] = useState('');

    // Get from store(redux) 
    const gameStore = useSelector(store => store.game);
    const username = useSelector(store => store.game.username);
    const description = useSelector(store => store.game.description);


    const fetching = useSelector(store => store.game.fetching);
    const timing = useSelector(store => store.game.timer);

    
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
        setActionDescription(action.description)
        onTimer();
        // Runs fetch function generateNewDirection with action prop from reusable
        dispatch(generateNewDirection(action));
    }

/*     const onHistoryBack = () => {
        // Not implemented yet but should return history
        dispatch(game.actions.historyGoBack());
    } */

    const onTimer = () => {
        dispatch(game.actions.setTimer(true))
        setTimeout(() => {
            dispatch(game.actions.setTimer(false))
        }, 5000);
    }

    if(fetching || timing) {
        return (
            <Wrapper>
                <Typewriter 
                    string={actionDescription} 
                    delay={20}/>
            </Wrapper>
        )
    }

    // When there is a description display description, direction and go back buttons.
    if(description) {
        return (
            <GameScreen>
                <DescriptionText>{gameStore.description}</DescriptionText>
                {/* <Button
                    onButtonClick={onHistoryBack}
                    text='Go Back'
                /> */}
                {gameStore.direction.map(action => {
                    return (
                            <MoveButton
                                key={action.description}
                                onClick={() => onGameMoveUpdate(action)}
                            >
                                Go {action.direction}
                            </MoveButton>
                    )
                })}  
            </GameScreen>
        )} 
    
    // When game is not started (there is no description) display username input field and start game button
    return (
        <GameScreen>
            <StartGameCard>
                <StartText>Play the game</StartText> 
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
            </StartGameCard>    
        </GameScreen>
    );
}
