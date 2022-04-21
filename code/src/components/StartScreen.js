import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'


import game, { generateGame } from "reducers/game";

import GameScreen from "./GameScreen";

// STYLED COMPONENTS

const Title = styled.h1`
font-size: 30px;
text-transform: uppercase;
text-align: center;
margin-bottom: 0;
`

const SubTitle = styled.h3`
text-align: center;
margin-top: 10px;
color: #00BC06;
`

const StartText = styled.p`
margin: 20px;
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const NameInput = styled.input`
font-family: 'VT323', monospace;
font-size: 30px;
border: 4px solid black;
width: 60vw;
height: 40px;
box-shadow: inset -6px -4px gray;
text-align: center;
margin-bottom: 20px;
text-transform: capitalize;

`

const Icon = styled.img`
margin-top: 20px;
width: 20px;
`

const StartBtn = styled.button`
font-family: 'VT323', monospace;
border: 4px solid #0091E0;
background: white;
width: 80%;
height: 50px;
box-shadow: inset -6px -4px gray;
text-transform: uppercase;
font-size: 30px;
box-shadow: 10px;
cursor: pointer;

&:hover {
  background-color: #0091E0;
  box-shadow: none;
  color: white;
  animation: animate 1.7s linear infinite;

  @keyframes animate {
   0%{
     opacity: 0;
   }
   50%{
     opacity: 1;
   }
   100%{
     opacity: 0;
   }
}
`


const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [step, setStep]  = useState(0);

  const dispatch = useDispatch();

  const onUsernameSelect = () => {
    dispatch(game.actions.setUsername(inputValue));
    dispatch(generateGame())
    setStep(state => state +1)
  }
 if (step === 0) {
  return (
    <div>
      <Title>Welcome to the labyrinth!</Title>
      <SubTitle>Don't maze it up</SubTitle>
      <StartText>Welcome to the Technigo maze. Your decisions will take you places you never thought you'd read of.</StartText>
      <InputWrapper>
      <NameInput
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <StartBtn onClick={onUsernameSelect}>Enter Maze</StartBtn>
      <Icon src="./public/icons/hero.png" alt="hero" />
      </InputWrapper>
    </div>
  );
 } else if (step === 1) {
   return (
    <GameScreen />
   )
 }

};

export default StartScreen;
