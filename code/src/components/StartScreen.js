import React, {useState} from 'react'
import { useDispatch } from "react-redux";

import game, { generateGame } from "../reducers/game";

const StartScreen = () => {
    const [username, setUserName] = useState('')

    const dispatch = useDispatch()

    const onUserSet = () => {
        dispatch(game.actions.setUsername(username))
        dispatch(generateGame(username))
        
    }

    const preventDefault = (event) => {
        event.preventDefault();
      };
      
    return(
        <form onSubmit={preventDefault}>
            <h5>Write your username:</h5>
            <input
            type='text'
            value={username}
            onChange={(event) => setUserName(event.target.value)}

             />
             <button type="submit" onClick={onUserSet}> Start game!
             </button>
        </form>
    )
}

export default StartScreen