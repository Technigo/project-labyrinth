import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import game, { generateQuote } from '../reducers/game'

const StartGame = () => {
    //controlled input we need states: 
    const [inputValue, setInputValue] = useState("")

    // const dispatch = useDispatch()
 
    // const setGame = () =>{
    //     dispatch(game.actions.setDirection(inputValue)) 
    // }

    return (
        <div>
            <p>Welcome to the labyrinth, type in your name </p>
            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}

            />
            <button onClick={setGame}>Start</button>
        </div>
    )
}

export default StartGame

