/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { fetchChoices, choices } from 'reducers/choices';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

export const Start = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [startConfirmed, setStartConfirmed] = useState(false)

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(choices.actions.addUserName(userName))
    setStartConfirmed(true)
  }

  // Function for storing user's text
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  // Dispaly welcome page with a form for user to create a player name
  // Once player is created, display the start page with start button
  return (
    <section>
      {!startConfirmed && (
        <>
          <Header>
            <HelloUser>👾Welcome to the game👾</HelloUser>
          </Header>
          <Form onSubmit={onFormSubmit}>
            <InputField
              type="text"
              value={userName}
              onChange={handleChange}
              placeholder="Your username" />
            <CreatePlayerBtn
              type="submit">
            Submit
            </CreatePlayerBtn>
          </Form>
        </>
      )}
      {startConfirmed && (
        <WelcomeWrapper>
          <HelloUser>Hello {userName}!</HelloUser>
          <PressStart>Press start to get your first instructions</PressStart>
          <StartBtn
            type="button"
            onClick={() => dispatch(fetchChoices())}>
            Start Game
          </StartBtn>
        </WelcomeWrapper>
      )}
    </section>

  )
}

const Header = styled.section`
  font-size: 38px;
  text-align: center;
  color: white;
`

const CreatePlayerBtn = styled.button`
  display: block;
  margin: 1rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 10px;
  padding: 10px 18px;
  margin: 40px 0px 8px 0px;
  font-size: 16px;
  font-family: 'Orbitron', sans-serif;
  &:hover {
      color: white;
      background-color:black; 
  }
  @media (min-width: 667px) and (max-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1025px) {
    font-size: 24px;
  }
`

const StartBtn = styled.button`
  display: block;
  margin: 1rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 10px;
  padding: 10px 18px;
  margin: 8px 0;
  font-size: 18px;
  font-family: 'Orbitron', sans-serif;

  @media (min-width: 667px) and (max-width: 1024px) {
    font-size: 20px;
    &:hover {
      color: white;
      background-color:black; 
  }}

  @media (min-width: 1025px) {
    font-size: 24px;
    &:hover {
      color: white;
      background-color:black; 
    }
  }
`

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const InputField = styled.input`
  width: 90%;
  padding: 30px 38px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 20px;
`

const HelloUser = styled.p`
color: white;
font-size: 40px;
font-family: 'Orbitron', sans-serif;

@media (min-width: 667px) and (max-width: 1024px) {
    font-size: 50px;
  }

  @media (min-width: 1025px) {
    font-size: 60px;
  }
`

const PressStart = styled.p`
color: white;
font-size: 18px;

@media (min-width: 667px) and (max-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1025px) {
    font-size: 24px;
  }
`

const WelcomeWrapper = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;

`