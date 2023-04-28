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
        </TextWrapper>
        <FormWrapper>
          <LowerText>To start your journey into the unknown...</LowerText>
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
  justify-content: flex-start;
  gap: 10px;
  padding-top: 30px;
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
const FormWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const LowerText = styled.p`
color: #B8B6F2;
text-align: center;
font-size: 20px;
background-color: rgba(0, 0, 0, 0.5);
padding: 15px;
font-family: 'Poltawski Nowy', serif;
border-radius: 10px;
font-style: italic;
text-shadow: 3px 3px 20px #ff99cc,
    -2px 1px 30px #7D458C;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

input {
  border: 2px #242526 solid;
  border-radius: 10px;
  padding: 5px;
  font-family: 'Poltawski Nowy', serif;
  font-size: 20px;
  width: 65vw;
  &:focus {
    border-color: #7D458C;
    box-shadow: 0 0 10px #7D458C;
    outline: none;
  }
}

input::placeholder {
  font-family: 'Poltawski Nowy', serif;
}
`
const StyledButton = styled.button`
  font-size: 21px;
  width: 65px;
  border: none;
  border-radius: 15px;
  padding: 5px;
  color: white;
  background: #486F73;
  font-family: 'Poltawski Nowy', serif;
  box-shadow: 0 0 10px black;
  margin-top: 10px;
  &:hover {
    box-shadow: 0 0 10px #7D458C;
  }
`