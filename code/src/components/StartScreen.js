import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css";

import game, { startGame } from '../reducers/game'

const StartScreen = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const onGameStart = () => {
    dispatch(game.actions.setUserName(value))
    dispatch(startGame())
  }
  return (
    <div className="nes-container is-rounded is-dark">
      <img src="./assets/cave.svg" className="start-screen-image" />
      <p>Welcome Adventurer!</p>
      <label htmlFor="dark_field">Enter your name:</label>

      <input
        type="text"
        id="dark_field"
        className="nes-input is-dark"
        placeholder="Mighty Maks"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button
        onClick={onGameStart}
        type="button"
        className={`nes-btn is-primary ${value === "" ? "is-disabled" : ""}`}
        disabled={value === "" ? true : false}
      >Start game!</button>
    </div>

  )
}
export default StartScreen
