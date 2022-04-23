import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth, { generateLabyrinth } from 'reducers/labyrinth'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onNameSelect = () => {
    dispatch(labyrinth.actions.setUserName(inputValue))
    dispatch(generateLabyrinth())
  }
  
  return (
    <div className="startPage">
      <h1 className="heading">Welcome to the labyrinth!</h1>
      <div>
      <form className='inputForm'>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter player name"
        />
        <button className="startButton" disabled={inputValue.length === 0} onClick={onNameSelect}>Start the game!</button>
      </form>
      </div>
    </div>
  )
}

export default StartScreen