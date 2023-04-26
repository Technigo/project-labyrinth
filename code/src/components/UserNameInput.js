import { Button } from 'lib/Button'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import game, { startGame } from 'reducers/game'
import styled from 'styled-components/macro'

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
      <WelcomeText>Please enter your name to enter the maze:</WelcomeText>
      <Label htmlFor="username">
        <input
          id="username"
          type="text"
          value={userNameInputValue}
          onChange={(event) => setUserNameInputValue(event.target.value)} />
        <Button type="submit" onClick={onFormSubmit} buttonText="Start" />
      </Label>
    </Form>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 300px;
    margin: 100px 0 20px 0;
    input[type=text] {
        background-color: transparent;
        border: 2px dashed #00cf00;
        padding: 5px;
        box-shadow: none;
        color: white;
        outline: none;
        margin-right: 10px;
    }
`

const WelcomeText = styled.h2`
  font-size: 20px;
`

const Label = styled.label`
  display: flex;
  flex-direction: row;
`