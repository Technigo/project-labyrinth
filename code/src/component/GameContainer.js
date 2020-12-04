import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'


import { GameStartContainer } from './GameStartContainer'
import { game } from '../reducers/game';
import { generateNewDirection } from '../reducers/reusable';
import { generateGameStart } from '../reducers/reusable';
import { Button } from './Button';
import { Wrapper } from '../styling/typewriter'


const GameScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: black;
    text-align: center;
`

const DescriptionText = styled.p`
    color: #fff;
    line-height: 1.6;
    padding: 30px;
`
const ButtonsContainer = styled.div`
display:flex;
`

const MoveButton = styled.button`
    font-family: 'Press Start 2P', cursive;
    font-size: 13px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #2A0EB2;
    width: 160px;
    margin: 10px;
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 20px;

    :hover {
        transform: scale(1.1);
        background-color: #2FF631;
    }
`

export const GameContainer = () => {
    const dispatch = useDispatch();
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
                <lottie-player
                autoplay
                    loop
                    mode="normal"
                    src={'https://assets8.lottiefiles.com/packages/lf20_RYwVrc.json'}
                    style={{ height: 100 }}
                    />
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
                <ButtonsContainer>
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
                </ButtonsContainer>
            </GameScreen>
        )} 
    
    // When game is not started display first page with username input field & start game button
    return (
        <GameStartContainer />
    );
}
