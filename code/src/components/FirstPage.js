import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { LoadingIndicator } from './LoadingIndicator'

import { game } from '../reducers/game'

export const FirstPage = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const onSubmitUsername = () => {
    dispatch(game.actions.submitUsername(username))
  }

  return (
    <>
      <h1>Are you ready to trust the process?</h1>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button disabled={username === ''} onClick={onSubmitUsername}>
        Submit
      </button>
      <LoadingIndicator />
    </>
  )
}
export default FirstPage
