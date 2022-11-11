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
            <h1>Welcome to the game</h1>
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
        <section>
          <h2>Hello {userName}!</h2>
          <h4>Press start to get your first instructions</h4>
          <button
            type="button"
            onClick={() => dispatch(fetchChoices())}>
            Start Game
          </button>
        </section>
      )}
    </section>

  )
}

const Header = styled.section`
  font-size: 24px;
`

const CreatePlayerBtn = styled.button`
  display: block;
  margin: 1rem;
  padding: 0.5rem;
  
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