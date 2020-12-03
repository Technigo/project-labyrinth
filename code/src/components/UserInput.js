import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"

import { game } from "reducers/game"

import { Wrapper } from './Main'
import { Button } from "lib/Button"

const Form = styled.form`

`
const Label = styled.label`
  margin-right: 5px;
  `

const InputField = styled.input`
  font-size: 100%;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;

@media (min-width: 768px) {
} 
`



export const UserInput = () => {
  const [username, setUsername] = useState("")
  
  const dispatch = useDispatch()

  const handleUserSubmit = event => {
    event.preventDefault()
    dispatch(
      game.actions.addUserName({
        username: username,
      })
    )
    setUsername("")
  }

  return (
    <Wrapper>
      <Form onSubmit={handleUserSubmit}>
        <Label>
          <InputField
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </Label>
        <Button disabled={!username} type="submit">
          Pick!
        </Button>
      </Form>
    </Wrapper>
  )
}
