import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import game from '../reducers/game'

export const NameInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onUserNameSet = (event) => {
    event.preventDefault()
    dispatch(game.actions.setUserName(value))
    // dispatch(generateGame(value))
  }

  return (
    <>
      <form>
        <div className="nes-field">
          <label for="name_field">Type your name here</label>
          <input
            type="text"
            id="name_field"
            className="nes-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className="nes-btn is-primary" onClick={onUserNameSet}>
          Submit
        </button>
      </form>
    </>
  )
}
