/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import steps, { fetchStart } from 'reducers/steps'

const StartingPage = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUserSet = () => {
    console.log(inputValue)
    dispatch(steps.actions.setUsername(inputValue))
    dispatch(fetchStart())
  }

  return (
    <>
      <h2>Hi Explorer!</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Explorer type you name.."
        onChange={(event) => setInputValue(event.target.value)}
        required
      />

      <button onClick={onUserSet}>ENTER</button>
    </>
  )
}

export default StartingPage
