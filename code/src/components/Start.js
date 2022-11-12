/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { fetchGame, choices } from 'reducers/choices';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

export const Start = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [startConfirmed, setStartConfirmed] = useState(false)

  // Function for when the form is submitted by user
  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(choices.actions.addUserName(userName))
    setStartConfirmed(true)
  }

  // Function for storing entered username
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
            onClick={() => dispatch(fetchGame('start'))}>
          Start Game
          </StartBtn>
        </WelcomeWrapper>
      )}
    </section>
  )
}

// STYLING FOR ABOVE COMPONENT
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
  color: "#333";
  border-radius: 10px;
  padding: 10px 18px;
  margin: 8px 0;
  font-size: 16px;
  font-family: 'Orbitron', sans-serif;
`

const StartBtn = styled.button`
  display: block;
  margin: 1rem;
  padding: 0.5rem;
  background-color: white;
  color: "#333";
  border-radius: 10px;
  padding: 10px 18px;
  margin: 8px 0;
  font-size: 16px;
  font-family: 'Orbitron', sans-serif;
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
`

const PressStart = styled.p`
  color: white;
  font-size: 16px;
`

const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`