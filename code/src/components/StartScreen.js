import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import game from '../reducers/game'
import { fetchGame } from 'reducers/game'



const StartScreen = () => {

    const [nameInput, setNameInput] = useState('')

    const dispatch = useDispatch()
    let navigate = useNavigate()



    const onNameSubmit = (nameInput) => {
        dispatch(game.actions.setNameInput(nameInput))
        navigate('/')
        setNameInput('')
    }

    const onSetNameInput = (event) => {
        setNameInput(event.target.value)
    }

    const onEnter = (event) => {
        if (event.key === 'Enter') {
            onNameSubmit(nameInput)
            dispatch(fetchGame(nameInput))
        }
    }

    const onStart = () => {
        onNameSubmit(nameInput)
        dispatch(fetchGame(nameInput))
    }
    
    return (

    <section>
        
        <h1>Let's play a game!</h1>
   
        <form>
        <label>
            Add your username:

            <input 
            type="text"
            value={nameInput}
            onChange={onSetNameInput}
            onKeyDown={(event) => {onEnter(event)
            }}/>

        </label>
        <button onClick={onStart} 
        type="submit">
           I'm ready</button>
        </form>
 

     
        </section>

    )

}


export default StartScreen