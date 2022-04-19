import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import questions, { generateGamedata } from '../reducers/questions';

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onUsernameSet = () => {
        dispatch(questions.actions.setUsername(inputValue))
        dispatch(generateGamedata())
    }
      
    return (
        <div>
      <p>Welcome to the labyrinth! Please print your name</p>
      <input
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={onUsernameSet}>Start the game!</button>
      </div>
    )
}

export default StartScreen