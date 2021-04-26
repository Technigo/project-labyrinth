import React, { useState } from 'react' 
import { useDispatch } from 'react-redux'

import games, { generateGame } from '../reducers/games'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onNameSet = () => {
    dispatch(games.actions.setName(inputValue))
    dispatch(generateGame())
  }


  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={onNameSet}>Send</button>
    </div>
  )
}

export default StartScreen