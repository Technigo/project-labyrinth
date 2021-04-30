import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import game, { advance } from '../reducers/game'

const StartScreen = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(game.actions.setUsername(value))
    dispatch(advance(value))
  }

  return (
    <div className="start-screen-wrapper">
      <div className="nes-container is-dark with-title is-centered">
        <p className="title">THE LABYRINTH</p>
        <div 
          style={{ padding: "1rem" }} 
          className="nes-field is-inline">
          <input 
            id="dark_field"
            className="nes-input is-dark" 
            type="text"
            placeholder="Your Name"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <div className="start-btn-wrapper">
            <button className="nes-btn" onClick={onSubmit}>
              Start
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}
export default StartScreen