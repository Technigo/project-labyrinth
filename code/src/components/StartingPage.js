/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/game';
import styled from 'styled-components/macro';
import startImage from '../assets/start.jpg'

export const StartingPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(game.actions.addPlayer(username))
    dispatch(startGame())
  }
  return (
    <MainSection>
      <InnerWrapper>
        <TextWrapper>
          <Title>Welcome</Title>
          <Text>Do you dare to enter the labyrinth cave?</Text>
          <Text>Pay attention or you will be lost forever</Text>
          <Text>Enter your name and start your journey into the unknown</Text>
        </TextWrapper>
        <FormWrapper>
          <FormStyled onSubmit={onFormSubmit}>
            <label htmlFor="usernameInput">
              <input
                id="usernameInput"
                type="text"
                placeholder="Enter your username"
                onChange={(event) => setUsername(event.target.value)}
                required />
            </label>
            <button type="submit">Start</button>
          </FormStyled>
        </FormWrapper>
      </InnerWrapper>
    </MainSection>
  )
}

const MainSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${startImage});
`
const InnerWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,.5);
  padding: 15px;
`

const Title = styled.h1`
color: #7D458C;
font-size: 53px;
`

const Text = styled.p`
color: #BFBFBF;
`

const FormWrapper = styled.div`
background-color: rgba(0,0,0,.5);
`
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`