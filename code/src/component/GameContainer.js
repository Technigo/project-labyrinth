import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';
import '@lottiefiles/lottie-player';

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
        // onGameGenerate renders when username is updated
    useEffect(onGameGenerate, [username])


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
        }, 7000);
    }

    if(fetching || timing) {
        return (
            <Wrapper>
                <lottie-player
                autoplay
                    loop
                    mode="normal"
                    src={'https://assets10.lottiefiles.com/packages/lf20_RYwVrc.json'}
                    style={{ height: 200 }}
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
