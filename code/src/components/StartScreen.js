import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { Button } from 'styles/GlobalStyling'
import { bg_start } from 'styles/BackgroundURLs'

import labyrinth, { startGame } from 'reducers/labyrinth'

export const StartScreen = () => {
  const dispatch = useDispatch()

  const [inputUsername, setInputUsername] = useState('')

  const onSetUsername = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(inputUsername))
    dispatch(startGame())
  }

  return (
    <>
      <Form onSubmit={onSetUsername}>
        <h1>Welcome to< br />Joanna and Nadia's labyrinth</h1>
        <Input>
          <input
            type="text"
            value={inputUsername}
            onChange={e => setInputUsername(e.target.value)}
            placeholder="Enter your name here"
            required />
          <Button disabled={!inputUsername.length} type="submit">Start</Button>
        </Input>
      </Form>
    </>
  )
}

export default StartScreen

const Form = styled.form`
  background-image: ${bg_start};
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  padding: 10px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & h1 {
    color: #fff;
    text-align: center;
  }
`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    padding: 5px;
  }
`
