import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { game } from "reducers/game";
import styled from "styled-components";


import { Button } from "lib/Button";


const Wrapper = styled.div`
border: 2px solid #000;
`
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
        <Button disabled={!username} type="submit">
          Username-Test
        </Button>
        <Label>
          <InputField
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </Label>
      </Form>
    </Wrapper>
  )
}
