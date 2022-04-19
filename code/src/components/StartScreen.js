import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import game from '../reducers/game'

const StartScreen = () => {
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')


    const onUserSet = () => {
        dispatch(game.actions.startGame(inputValue))
    }
    
    return (

    <section>
        
        <h1>Let's play a game!</h1>

        <form>
        <label>
            Add your username:
            <input 
            type="text"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)} />
        </label>
        <button onClick={onUserSet} 
        type="submit">
           I'm ready</button>
        </form>
        </section>

    )

}


export default StartScreen