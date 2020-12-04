import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { initiateAction } from "../reducers/reusable";
import { moves } from "../reducers/moves";
import { EndPage } from "./EndPage";
import { MainContainer, TopDiv,  Coordinates, Bold, MoveText, ChooseText, Text, MovingWrapper, DirectionWrapper, InnerDiv, ButtonWrapper, ButtonShape, Button, BackButtonShape, BackButton } from 'styled-components/MoveContainer';

export const MoveContainer = () => {

    //Accessing what get's stored in the move object including the initial action array object from the first post request that has the start endpoint. 
    const move = useSelector ((state) => state.moves.move);
    const universalUsername = useSelector ((state) => state.moves.username);
    const dispatch = useDispatch();
    // const moveArray = useSelector ((state) => state.moves.history)

    //When the user clicks the button, which is made up of the action type and direction, the onNextMove function is called and the post request is sent to the action end point in the initiateAction function is reusable.js. This will happen for each of the action array elements returned when the post request is clicked and the direction has been chosen. Also sending in the direction that we click on so the post request knows which direction the user wants to go and also what to return when the post request is completed. 
    const onNextMove = (direction, universalUsername) => {
        dispatch(initiateAction(direction, universalUsername));
    };

    const onHistoryBack = () => {
        dispatch(moves.actions.historyGoBack());
    };

    //When the user clicks the final direction button a final post request to the action endpoint will be done and all that is returned is coordinates, a description and an empty actions array. So when this is the case we navigate to the EndPage to show the final coordinates, description and a restart the game button
    if (move.actions.length === 0) {
        return  <EndPage />        
    };

    return (
        <MainContainer>
            <TopDiv>
                <Coordinates><Bold>Your coordinates:</Bold> {move.coordinates}</Coordinates> 
                <MoveText>{move.description}</MoveText>
            </TopDiv>
            { move.actions.length > 1 && <ChooseText>Choose which direction you want to go:</ChooseText>}
            <MovingWrapper >
                {move.actions.map(action => (
                    <DirectionWrapper key={action.description}>
                        <InnerDiv>
                            <Text>{action.description}</Text>
                            <ButtonWrapper>
                                <ButtonShape>
                                    <Button 
                                        onClick={() => onNextMove(action.direction, universalUsername)}>
                                        Move {action.direction}
                                    </Button>
                                </ButtonShape>
                            </ButtonWrapper>
                        </InnerDiv>
                    </DirectionWrapper>
                ))}
                </MovingWrapper>
            {move.actions.length > 1 &&
                <ButtonWrapper>
                    <BackButtonShape>
                        <BackButton onClick={onHistoryBack}>Back</BackButton>
                    </BackButtonShape>
                </ButtonWrapper>            
            }
        </MainContainer>
    );
};