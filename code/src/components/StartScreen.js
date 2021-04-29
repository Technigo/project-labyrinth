import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import games, { createPlayer } from '../reducers/games'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUserSet = () => {
    dispatch(games.actions.setUserName(inputValue))
    dispatch(createPlayer())
  }

  return (
    <Background>
      <Container>
        <Header>Welcome to the labyrinth</Header>
        <Text>Do you want to play a game?</Text>
        <Text> Please enter your name</Text>
        <Input 
          type='text'
          value={inputValue}
          placeholder='Type your username'
          onChange={event => setInputValue(event.target.value)}
        />
        <Button onClick={onUserSet}>START</Button>
        <Animation>
          <lottie-player 
            src='https://assets9.lottiefiles.com/temp/lf20_QtNLkw.json'  
            background='transparent'  
            speed='1'  
            style={{width: '300px', height: '300px'}} 
            loop  autoplay>
          </lottie-player>
        </Animation>
      </Container>
    </Background>
  )
}

export default StartScreen

const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1532980216874-21f93fa9fd15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;

  @media (min-width: 767px){
    background-image: url('https://images.unsplash.com/photo-1560032779-a4e02a11e39e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
  }
`
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px){
    padding-top: 60px;
  }
`
const Header = styled.h1`
  color: #FFF;
  display: inline-block;
  text-align: center;
  margin-top: 45px;
`
const Text = styled.p`
  color: #FFF;
  font-weight: bold;
  margin: 5px;
`
const Input = styled.input`
  border: none;
  height: 25px;
  margin-top: 30px;
`
const Button = styled.button`
  border: none;
  color: #FFF;
  font-weight: bold;
  margin-top: 20px;
  background: none;
  border: solid 2px #FFF;
  padding: 7px 14px;

  :hover {
    color: #000;
    background-color: #FFF;
  }
`
const Animation = styled.div`
`
