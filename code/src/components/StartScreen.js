import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth, { generateContent } from '../reducers/labyrinth'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()
  const onUserSet = () => {
    dispatch (labyrinth.actions.setName(inputValue))
    dispatch(generateContent())
  }

  return (
    <>
      <div>
        <p>Welcome!</p>
        <input 
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          onClick={onUserSet}
        >
          Start!
        </button>
      </div>
    </>
  )
}

export default StartScreen