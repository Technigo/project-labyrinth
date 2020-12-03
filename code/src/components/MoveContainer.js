import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { initiateAction } from "../reducers/reusable";
import { moves } from "../reducers/moves";
import EndPage from "./EndPage";
import Loading from "./Loading";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* filter: blur(8px); */
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    text-align: center;
`;

const Coordinates = styled.p`
    font-family: 'Mystery Quest', cursive;
    color: hotpink; 
    font-size: 30px;
    background: rgba(255,255,255, 0.8);
    padding: 10px;   
`;

const MoveText = styled.p`
    background: rgba(255,255,255, 0.8);
    padding: 10px;
    color: hotpink;   
`;

const ChooseText = styled.p`
    background: rgba(255,255,255, 0.8);
    padding: 10px;
    color: hotpink; 
`;

const Text = styled.p`
    color: hotpink;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center; 
`;

const MovingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media (min-width: 650px) {
        flex-direction: row;
    }
`;

const DirectionWrapper = styled.div` 
    border: 3px solid;
    border-color: #b2f7db #f4dbb8 #e6c2fb #c1cafb;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px;
    min-width: 250px;
    max-width: 350px;
    min-height: fit-content;
    max-height: 380px;    
    @media (min-width: 650px) {
        width: 50%;
        margin-right: 10px;
    }
`;

const InnerDiv = styled.div`
    height: 100%;
`;

const ButtonWrapper = styled.div`
    margin: auto;
    display: flex;
    text-align: initial;
    width: 150px;
    height: 150px;
    cursor: pointer;
`;

const ButtonShape = styled.div`   
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #f4dbb8);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
    &:before, &:after {
        position: absolute;
        content: "";
        background: inherit;
        height: 100%;
        width: 100%;
        border-radius: 0;
        transition: 0.5s;
        transform-origin: center;
    }
    &:before {
        transform: rotateZ(60deg);
    }
    &:after {
        transform: rotateZ(-60deg);
    }
    &:hover {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:before {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:after {
        border-radius: 50px;
        transition: 0.5s;
    }
`;

const Button = styled.button`
    border: none;
    z-index: 1;
    margin: auto;
    font-size: 30px;
    font-family: 'Mystery Quest', cursive;
    color:  #ffc16b;
    background-clip: text;
    -webkit-background-clip: text;
`;

const BackButtonShape = styled.div`   
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #e6c2fb);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
    &:before, &:after {
        position: absolute;
        content: "";
        background: inherit;
        height: 100%;
        width: 100%;
        border-radius: 0;
        transition: 0.5s;
        transform-origin: center;
    }
    &:before {
        transform: rotateZ(60deg);
    }
    &:after {
        transform: rotateZ(-60deg);
    }
    &:hover {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:before {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:after {
        border-radius: 50px;
        transition: 0.5s;
    }
`;

const BackButton = styled.button`
    border: none;
    z-index: 1;
    margin: auto;
    font-size: 30px;
    font-family: 'Mystery Quest', cursive;
    color:  #c46ff6;
    background-clip: text;
    -webkit-background-clip: text;
    cursor: pointer;
`;

const MoveContainer = () => {

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
            <Loading />
            <Coordinates>Your coordinates: {move.coordinates}</Coordinates>
            <MoveText>{move.description}</MoveText>
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
            {move.actions.length > 0 &&
                <ButtonWrapper>
                    <BackButtonShape>
                        <BackButton onClick={onHistoryBack}>Back</BackButton>
                    </BackButtonShape>
                </ButtonWrapper>            
            }
        </MainContainer>
    );
};

export default MoveContainer;