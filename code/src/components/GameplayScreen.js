import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

import game, { advance } from '../reducers/game'


const GameplayScreen = () => {
  
  const dispatch = useDispatch()

  const onConfirm = () => {
    dispatch(advance())
  }

  return (
    <div className="game-wrapper">
      <div className="room-info nes-container is-dark with-title is-centered">
        <p className="title">THE LABYRINTH</p>
        <p>Spooky Scary Skeletons are limping your way.</p>
      </div>
      <div className="nes-container is-dark with-title">
        <p className="title">ACTIONS</p>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" checked/>
          <span>Investigate</span>
        </label>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" />
          <span>Run</span>
        </label>
        <button type="button" className="nes-btn" onClick={onConfirm}>CONFIRM</button>
      </div>
    </div>
  )
  
}

{/* <h3 style={{color: "#f7f7f7", backgroundColor: "#212529"}}>THE LABYRINTH</h3> */}
export default GameplayScreen