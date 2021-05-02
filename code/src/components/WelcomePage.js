import React, { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import TopText from 'components/TopText'
import games, { generateGame } from '../reducers/games'

const WelcomePage = () => {
  const name = useSelector(store => store.games.username)
  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  const onNameSet = () => {
    if(inputValue.length > 3) {
        dispatch(games.actions.setName(inputValue))
        dispatch(generateGame(inputValue))
    } else {
        alert('Enter your name please!')
    }
  }

  return (
    <div>
      {name ? 
        <TopText /> : 
      <div> 
        <div className='nes-field'>
          <label htmlFor='name_field' className='nes-text is-warning'>Enter your name</label>
          <input 
            type='text' 
            id='name_field'
            className='nes-input'      
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </div>
        <button 
          onClick={onNameSet} 
          type='button' 
          className='nes-btn is-warning'
        >
          ENTER
        </button>
      </div>   
      }   
    </div>
  )
}

export default WelcomePage 