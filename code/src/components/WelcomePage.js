import React, { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import StartScreen from 'components/StartScreen'
import games, { generateGame } from '../reducers/games'

const WelcomePage = () => {
  const name = useSelector(store => store.games.username)
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onNameSet = () => {
    dispatch(games.actions.setName(inputValue))
    dispatch(generateGame(inputValue))
  }

  return (
      <div>
        { name ? 
          <StartScreen /> : 
        <div className="test"> 
          <div className="nes-field">
            <label for="name_field" className="nes-text is-warning">Enter your name</label>
            <input 
              type="text" 
              id="name_field" 
              className="nes-input"       
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </div>
          <button onClick={onNameSet} type="button" className="nes-btn is-warning">PRESS START</button>
        </div>   
        }   
      </div>
  )
}

export default WelcomePage 