import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"

import { game } from "../reducers/game"

import { Wrapper } from '../lib/Containers'
import { Button } from "../lib/Button"
import { Subtitle } from '../lib/Card'

const Form = styled.form`
`

const Label = styled.label`
  margin-right: 0.3em;
  `

const InputField = styled.input`
  font-size: 100%;
  padding: 0.3em;
  border: 0.06em solid grey;
  border-radius: 0.3em;

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
        <Label><Subtitle> Choose your username </Subtitle>
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
 