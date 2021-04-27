import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import game, { generateGame }from '../reducers/game'

const StartGame = () => {
    //controlled input we need states: 
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
 
    const setGame = () => {
        //dispatching an action that takes the inputValue to change username
        dispatch(game.actions.setPlayerName(inputValue)) 
        //dispathing thunk function
        dispatch(generateGame())
        // fetch("https://wk16-backend.herokuapp.com/start", {
        //     method: "POST",
        //     headers: {"Content-type": "application/json"},
        //     body: JSON.stringify({username: inputValue})})
        //     .then(jsonData => jsonData.json())
        //     .then(dataObject => console.log(dataObject))
    } 
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

