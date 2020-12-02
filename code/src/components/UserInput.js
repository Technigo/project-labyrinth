import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"

import { game } from "reducers/game"

import { Wrapper } from './Main'
import { Button } from "lib/Button"

// but maybe this could be imported from main wrapper instead?
/* const Wrapper = styled.div`
  display: flex;
  justify-content: center;
` */
const Form = styled.form`

`
const Label = styled.label`

`

const InputField = styled.input`
`



export const UserInput = () => {
  const [username, setUsername] = useState("")

  const dispatch = useDispatch()

  // adding the username into the state/store
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
          Username-Test
        </Button>
      </Form>
    </Wrapper>
  )
}
