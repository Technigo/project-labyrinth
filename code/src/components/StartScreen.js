import React, { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import games, { generateGame } from '../reducers/games'

const StartScreen = () => {
  const name = useSelector(store => store.games.username)
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onNameSet = () => {
    dispatch(games.actions.setName(inputValue))
    dispatch(generateGame(inputValue))
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={onNameSet} type="button" class="nes-btn is-primary">SEND</button>
      <p>Hi you: {name}</p>
    </div>
  )
}

export default StartScreen 