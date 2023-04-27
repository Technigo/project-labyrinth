import { Button } from 'lib/Button'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import game, { startGame } from 'reducers/game'
import styled from 'styled-components/macro'

export const StartPage = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(userNameInputValue))
    dispatch(startGame())
  }

  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      <WelcomeText>Please enter your name to return the labyrinth:
      </WelcomeText>
      <Label htmlFor="username">
        <input
          id="username"
          type="text"
          placeholder="InputValue"
          value={userNameInputValue}
          onChange={(event) => setUserNameInputValue(event.target.value)} />
        <Button type="submit" onClick={onFormSubmit} buttonText="Submit" />
      </Label>
    </Form>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 262px;
    margin: 100px 0 20px 0;
    padding-bottom: 3.5rem;

    input[type=text] {
        background-color: transparent;
        border: 2px dashed #00cf00;
        border-radius: 3px;
        padding: 5px;
        box-shadow: none;
        font-family: 'Source Code Pro', monospace;
        color: rgb(58, 209, 225);
        font-size: 14px;
        outline: none;
        margin-right: 10px;
    }
`

const WelcomeText = styled.h2`
  font-size: 16px;
  margin-bottom: 15px;
  color: rgb(239, 92, 116);
`

const Label = styled.label`
  display: flex;
  flex-direction: row;
`