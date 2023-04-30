import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { game, postUsername } from 'reducers/game'
import styled from 'styled-components'
import { Button } from '../lib/Button'

const StartingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GameTitle = styled.h1`
  width: 95%;
  min-width: 355px;
  max-width: 520px;
  text-align: center;
  font-size: 30px;
  line-height: 45px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  `

const Label = styled.label`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  width: 345px;
  height: 70px;
  border: var(--blue) dashed 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  background-color: var(--pink);
  margin: 20px auto 35px auto;
  text-align: center;
  color: var(--blue);
  font-weight: bold;
`

const StartingPage = () => {
  const [nameInput, setNameInput] = useState('')
  const dispatch = useDispatch()

  // function that dispatched usernameinput to the global state.
  const onNameInputSubmit = () => {
    // dispatch to store the name in global state
    dispatch(game.actions.setUsername(nameInput))
    // displatch to do first fetch from API
    dispatch(postUsername())
  }

  return (
    <StartingPageContainer>
      <GameTitle>Ready to enter the labyrinth?</GameTitle>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Label htmlFor="username">Tell me your name:
          <Input
            id="username"
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)} />
        </Label>
        <Button
          type="submit"
          onClick={onNameInputSubmit}>Enter the labyrinth
        </Button>
      </Form>
    </StartingPageContainer>
  );
}

export default StartingPage;