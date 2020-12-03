import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';

import { initiateStart } from "../reducers/reusable";
import MoveContainer from './MoveContainer';
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

const Text = styled.p`
    color: hotpink;
`;

const Bold = styled.span`
    font-weight: bold;
    color: #d89ff9;
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
    cursor: pointer;
`;

const StartButton = () => {
    const move = useSelector ((state) => state.moves.move);
    const universalUsername = useSelector ((state) => state.moves.username);
    const dispatch = useDispatch();

    //If move coordinates has been updated, as it will when the start button is clicked and the first post request is completed, then show the MoveContainer component
    if (move.coordinates) {
        return <MoveContainer />
    };

    return (
        <MainContainer>
            <Loading />
            <Text>Greetings <Bold>{universalUsername}</Bold>! Press start to begin your labyrinth journey!</Text>  
            <ButtonWrapper>
                <ButtonShape>           
                    <Button onClick={() => dispatch(initiateStart(universalUsername))}>START</Button>
                </ButtonShape>
            </ButtonWrapper>
        </MainContainer>
    );
};

export default StartButton;