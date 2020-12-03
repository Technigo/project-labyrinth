import React from 'react';
import styled from "styled-components"
import { useSelector } from "react-redux";

import image from "../assets/End-Image.jpg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    text-align: center;
`;

const FinishText = styled.p`
    font-family: 'Mystery Quest', cursive;
    color: hotpink; 
    font-size: 30px;
    background: rgba(255,255,255, 0.8);
    padding: 10px;  
    margin-bottom: 0;
`;

const Coordinates = styled.p`
    font-family: 'Mystery Quest', cursive;
    color: hotpink; 
    font-size: 30px;
    background: rgba(255,255,255, 0.8);
    padding: 10px;  
`;

const FinalImage = styled.img`
    width: 300px;
`;

const Text = styled.p`
    color: hotpink;
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

const EndPage = () => {
    const move = useSelector ((state) => state.moves.move);

    const resetPage = () => {
        window.location.reload()
    };
    
    return (
        <MainContainer>
            <FinishText>Congratulations you've finished the game!</FinishText>
            <Coordinates>Your coordinates: {move.coordinates}</Coordinates>
            <FinalImage src={image}></FinalImage>
            <Text>{move.description}</Text>
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

export default EndPage;