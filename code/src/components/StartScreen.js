import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'

import Loader from "./Loader";

import game, { generateGame } from "reducers/game";

import GameScreen from "./GameScreen";

// STYLED COMPONENTS

const Title = styled.h1`
font-size: 30px;
text-transform: uppercase;
text-align: center;
margin-bottom: 0;

@media (min-width : 768px) {
  font-size: 36px;
}
`

const SubTitle = styled.h3`
font-size: 22px;
text-align: center;
margin-top: 10px;
color: #00BC06;

@media (min-width : 768px) {
  font-size: 28px;
}
`

const StartText = styled.p`
  font-size: 18px;
  margin: 20px;

 @media (min-width : 768px) {
   font-size: 24px;
   margin: 20px 70px;  
 }
`

const InputWrapper = styled.form`
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

@media (min-width: 768px) {
  width: 40vw;
}
`

const Icon = styled.img`
margin-top: 20px;
width: 80px;

@media (min-width: 768px) {
  width: 140px;
  margin-top: 50px;
  padding-bottom: 20px;
}
`

const StartBtn = styled.button`
font-family: 'VT323', monospace;
border: 4px solid #0091E0;
background: white;
width: 80%;
height: 50px;
box-shadow: inset -6px -4px #1583BF;
text-transform: uppercase;
font-size: 30px;
box-shadow: 10px;
cursor: pointer;

&:hover {
  background-color: #0091E0;
  box-shadow: none;
  color: gray;
  animation: animate 1.7s linear infinite;
}

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

@media (min-width: 768px) {
  width: 40vw;
}
`

const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const isLoading = useSelector((store) => store.game.isLoading)
  const hasUsername = useSelector((store) => store.game.username)
  const dispatch = useDispatch();

  const onUsernameSelect = (e) => {
    e.preventDefault()
    dispatch(game.actions.setUsername(inputValue));
    setInputValue("")
    dispatch(generateGame())
  }

  if (isLoading) {
    return <Loader />
  }

  if (!hasUsername) {
    return (
      <section>
        <Title>Welcome to the labyrinth!</Title>
        <SubTitle>Don't maze it up</SubTitle>
        <StartText>Welcome to the Technigo maze. Your decisions will take you places you never thought you'd read of. Are you ready?</StartText>
        <InputWrapper>
        <label htmlFor="usernameInput"></label>
          <NameInput
            type="text"
            placeholder="Enter name.."
            value={inputValue}
            required
            onChange={(event) => setInputValue(event.target.value)}
            name="usernameInput"
          />
          <StartBtn type="submit" onClick={onUsernameSelect}>Enter Maze</StartBtn>
          <Icon src="./icons/hero.png" alt="hero" />
        </InputWrapper>
      </section>
    )
  } else {
    return (<GameScreen />)
  }

}

export default StartScreen;
