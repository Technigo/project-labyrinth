import { Button } from 'lib/Button'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import game, { startGame } from 'reducers/game'
import styled from 'styled-components/macro'

// Since this component consist of several elements of the starting content maybe it should be
// renamed to StartPage instead?
export const UserNameInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(userNameInputValue))
    dispatch(startGame())
  }

  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      <WelcomeText>Please enter your name to return the maze:
      </WelcomeText>
      <Label htmlFor="username">
        <input
          id="username"
          type="text"
          placeholder="InputValue"
          value={userNameInputValue}
          onChange={(event) => setUserNameInputValue(event.target.value)} />
        <Button type="submit" onClick={onFormSubmit} buttonText="submit" />
      </Label>
    </Form>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 300px;
    margin: 180px 0 20px 0;
    input[type=text] {
        background-color: transparent;
        border: 2px dashed #00cf00;
        padding: 5px;
        box-shadow: none;
        font-family: 'Source Code Pro', monospace;
        color: rgb(58, 209, 225);
        font-size: 15px;
        outline: none;
        margin-right: 10px;
    }
`

const WelcomeText = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  color: rgb(239, 92, 116);
`

const Label = styled.label`
  display: flex;
  flex-direction: row;
`