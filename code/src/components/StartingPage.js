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
            <StyledButton type="submit">Start</StyledButton>
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
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`
const TextWrapper = styled.div`
  width: 80vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  background-color: rgba(0,0,0,.5);
  padding: 15px;

  @media (min-width: 668px) {
    width: 50vw;
  }  
`

const Title = styled.h1`
color: #7D458C;
font-size: 53px;
`

export const Text = styled.p`
color: #BFBFBF;
text-align: center;
font-size: 1.5rem;
`

const FormWrapper = styled.div`
/* background-color: rgba(0,0,0,.5); */
`
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

input {
  border-radius: 10px;
  padding: 10px;
  font-family: 'Roboto Slab', serif;
}

input::placeholder {
  font-family: 'Roboto Slab', serif;
}
`
const StyledButton = styled.button`
  width: 65px;
  border: none;
  border-radius: 15px;
  padding: 5px;
  color: white;
  background: #486F73;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`