import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { games, createNewPlayer } from '../reducers/games'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
      e.preventDefault()

      if (inputValue !== '') {
        dispatch(games.actions.setUserName(inputValue))
        dispatch(createNewPlayer(inputValue))
      } 
        setInputValue('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                placeholder="Type your name..."
            />
            <button onClick={onFormSubmit}>Start</button>
        </form>
    )
}

export default StartScreen