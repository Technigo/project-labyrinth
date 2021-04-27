import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import game from '../reducers/game'

const StartScreen = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(game.actions.setUsername(value))
  }

  return (
    <div>
      <h1>Welcome to the LABYRINTH</h1>
      <div style={{backgroundColor: "#212529", padding: "1rem"}} class="nes-field is-inline">
        <label for="dark_field" style={{color: "#fff"}}></label>
        <input
          id="dark_field"
          class="nes-input is-dark" 
          type="text"
          placeholder="What's your name?"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button className="nes-btn" onClick={onSubmit}>Start</button>
      </div>
    </div>
  )
}
{/* <h3 style={{color: "#f7f7f7", backgroundColor: "#212529"}}>THE LABYRINTH</h3> */}
export default StartScreen