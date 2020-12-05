import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typewriter } from 'react-typewriting-effect';

import { GameStartContainer } from './GameStartContainer'
import { game } from '../reducers/game';
import { generateNewDirection } from '../reducers/reusable';
import { generateGameStart } from '../reducers/reusable';
import { Wrapper } from '../styling/typewriter';
import { GameScreen, DescriptionText, ButtonsContainer, MoveButton } from '../styling/gamecontainer';


export const GameContainer = () => {
    const dispatch = useDispatch();
    const [actionDescription, setActionDescription] = useState('');

    // Get from store(redux) 
    const gameStore = useSelector(store => store.game);
    const username = useSelector(store => store.game.username);
    const description = useSelector(store => store.game.description);
    const fetching = useSelector(store => store.game.fetching);
    const timing = useSelector(store => store.game.timer);
    
    const onGameGenerate = () => {
        // Runs the fetch function generateGameStart from reusable
        dispatch(generateGameStart());
    }

    // onGameGenerate renders when username is updated
    useEffect(onGameGenerate, [username])

    const onGameMoveUpdate = (action) => {
        setActionDescription(action.description)
        onTimer();

        // Runs fetch function generateNewDirection with action prop from reusable
        dispatch(generateNewDirection(action));
    }

    // Set timer to true when funtions start and after 7 sec sets it to false.
    const onTimer = () => {
        dispatch(game.actions.setTimer(true))
        setTimeout(() => {
            dispatch(game.actions.setTimer(false))
        }, 7000);
    }

    //If the fetch or timer is still going, render the choosen action description.
    if(fetching || timing) {
        return (
            <Wrapper>
                <Typewriter 
                    string={actionDescription} 
                    delay={20}
                />
            </Wrapper>
        )
    }

    // When there is a description render description, direction and go back buttons.
    if(description) {
        return (
            <GameScreen>
                <DescriptionText>{gameStore.description}</DescriptionText>
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
    
    // When game is not started render first page with username input field & start game button
    return (
        <GameStartContainer />
    );
}
