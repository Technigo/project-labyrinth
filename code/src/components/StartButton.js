import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initiateStart } from '../reducers/reusable';
import { MoveContainer } from './MoveContainer';
import { MainContainer, Text, ButtonWrapper, ButtonShape, Button, Bold } from 'styled-components/StartButton';

export const StartButton = () => {
    const move = useSelector ((state) => state.moves.move);
    const universalUsername = useSelector ((state) => state.moves.username);
    const dispatch = useDispatch();

    //If move coordinates has been updated, as it will when the start button is clicked and the first post request is completed, then show the MoveContainer component
    if (move.coordinates) {
        return <MoveContainer />
    };

    return (
        <MainContainer>
            <Text>Greetings <Bold>{universalUsername}</Bold>! Press start to begin your rainbow labyrinth journey!</Text>  
            <ButtonWrapper>
                <ButtonShape>           
                    <Button onClick={() => dispatch(initiateStart(universalUsername))}>START</Button>
                </ButtonShape>
            </ButtonWrapper>
        </MainContainer>
    );
};