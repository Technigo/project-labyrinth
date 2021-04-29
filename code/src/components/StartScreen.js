import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import game, { start } from '../reducers/game'

const StartScreen = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(game.actions.setUsername(value))
    dispatch(start(value))
  }

  return (
    <div>
      <div className="room-info nes-container is-dark with-title is-centered">
        <p className="title">THE LABYRINTH</p>
        <div 
          style={{ padding: "1rem" }} 
          className="nes-field is-inline">
          <input
            id="dark_field"
            className="nes-input is-dark" 
            type="text"
            placeholder="What's your name?"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <div className="action-btn-wrapper">
            <button className="nes-btn" onClick={onSubmit}>
              Start
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
{/* <h3 style={{color: "#f7f7f7", backgroundColor: "#212529"}}>THE LABYRINTH</h3> */}
export default StartScreen