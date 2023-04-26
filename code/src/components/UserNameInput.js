import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import game, { startGame } from 'reducers/game'
import styled from 'styled-components/macro'

export const UserNameInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('')
  const dispatch = useDispatch

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(userNameInputValue))
    dispatch(startGame())
  }

  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="username">
        <input
          id="username"
          type="text"
          onChange={(event) => setUserNameInputValue(event.target.value)} />
      </label>
    </Form>
  )
}

const Form = styled.form`
    display: flex;
    margin: 0 auto;
`