import React, {useState} from 'react'
import { useDispatch } from "react-redux";

import game, { generateGame } from "../reducers/game";

const StartScreen = () => {
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch()

    const onUserSet = () => {
        dispatch(game.actions.setUser(userInput))
        dispatch = (generateGame())
        
    }

    const preventDefault = (event) => {
        event.preventDefault();
      };
    return(
        <form onSubmit={preventDefault}>
            <h5>Write your username:</h5>
            <input
            type='text'
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}

             />
             <button type="submit" onClick={onUserSet}> Start game!
             </button>
        </form>
    )
}

export default StartScreen