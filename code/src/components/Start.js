import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import game from '../reducers/game'
import { startGame } from '../reducers/game'

const Start = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUserNameSet = (event) => {
    event.preventDefault()
    dispatch(game.actions.setUsername(inputValue))
    dispatch(startGame())
  }

  const hasStarted = useSelector((state) => state.game.currentPosition)

  return (
    <div>
      {!hasStarted &&
        <form onSubmit={onUserNameSet}>
          <h1>Welcome!</h1>
          <p>Your name?</p>
          <input type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>}
    </div>


  )
}

export default Start