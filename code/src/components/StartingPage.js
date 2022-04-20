/* eslint-disable */
import React from 'react'
import { useDispatch } from 'react-redux'
import steps from 'reducers/steps'
import styled from 'styled-components/macro'

import { fetchStart } from 'reducers/steps'

const StartingPage = () => {
  const dispatch = useDispatch()

  const handleNameInput = (event) => {
    dispatch(steps.actions.setUsername(event.target.value))
  }

  const start = (event) => {
    event.preventDefault()
    dispatch(fetchStart())
  }

  return (
    <>
      <h2>Hi Explorer!</h2>
      <form onSubmit={start}>
        <input
          type="text"
          name="user"
          placeholder="Explorer type you name.."
          onChange={handleNameInput}
          required
        />

        <Button type="submit">ENTER</Button>
      </form>
    </>
  )
}

const Button = styled.button`
  background-color: blue;
`
export default StartingPage
