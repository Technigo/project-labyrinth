import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import Lottie from 'lottie-react';
import { game, getGameStarted } from '../reducers/game'
import { StyledButton } from './GlobalStyles';
import animationData from '../lotties/rabbit.json';

const StartWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100vh;
align-items: center;
background: rgba(213, 146, 131, 0.59);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.9px);
-webkit-backdrop-filter: blur(3.9px);
border: 1px solid rgba(213, 146, 131, 0.3);
border: 2px solid yellow;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 30px;
/* overflow: auto; */
`
const HeaderTitle = styled.h1`
margin-right: 1.5rem;
margin-left: 1.5rem;
text-align: center;
`
const GreetText = styled.p`
margin-bottom: 0.5rem;
font-weight: 600;
`

const StartPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(username))

    dispatch(getGameStarted());
  }

  return (
    <StartWrapper>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
        autoplay={defaultOptions.autoplay}
        renderer={defaultOptions.renderer}
        rendererSettings={defaultOptions.rendererSettings}
        style={{ width: '300px', height: '300px' }} />
      <HeaderTitle>Welcome to The Rabbit Hole Labyrinth, my friend!</HeaderTitle>
      <GreetText> Every adventure requires a first step...</GreetText>
      <GreetText>Please start by entering your name. </GreetText>
      <form onSubmit={(event) => onFormSubmit(event)}>
        <label htmlFor="user-input">
        Whats your name?
          <input
            id="user-input"
            type="text"
            onChange={(event) => setUsername(event.target.value)} />
        </label>
        <StyledButton type="submit">START</StyledButton>
      </form>
    </StartWrapper>)
}

export default StartPage