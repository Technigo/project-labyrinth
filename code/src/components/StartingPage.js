/* eslint-disable */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import steps from 'reducers/steps'
import styled from 'styled-components/macro'

const StartingPage = () => {
  const dispatch = useDispatch()
  const username = useSelector((store) => store.steps.username)
  const handleClick = () => {
    if (username.length > 0) {
      dispatch(FETCH())
    } else return alert("Don't you have a name")
  }

  return (
    <>
      <Input
        type="text"
        name="user"
        placeholder="Explorer type you name.."
        onChange={(username) =>
          dispatch(steps.actions.setUsername(username.target.value))
        }
      />
      <Button type="button" onClick={() => handleClick()}>
        ENTER
      </Button>
    </>
  )
}

export default StartingPage
