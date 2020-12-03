import React from 'react';
import { useSelector } from "react-redux";

import image from "../assets/End-Image.jpg";
import { MainContainer, FinishText, TopDiv, Bold, Coordinates, SemiBold, FinalImage, Text, ButtonWrapper, ButtonShape, Button } from 'styled-components/EndPage';

export const EndPage = () => {
    const move = useSelector ((state) => state.moves.move);
    const universalUsername = useSelector ((state) => state.moves.username);

    const resetPage = () => {
        window.location.reload()
    };
    
    return (
        <MainContainer>
            <FinishText>Congratulations <Bold>{universalUsername}</Bold> you've completed the rainbow labyrinth!</FinishText>
            <FinalImage src={image}></FinalImage>
            <TopDiv>
                <Coordinates><SemiBold>Your coordinates:</SemiBold> {move.coordinates}</Coordinates> 
                <Text>{move.description}</Text>
            </TopDiv>
            <ButtonWrapper>
                <ButtonShape>
                    <Button onClick={resetPage}>
                        RESTART
                    </Button>
                </ButtonShape>
            </ButtonWrapper>
        </MainContainer>
    );
};