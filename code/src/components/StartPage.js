import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import "nes.css/css/nes.min.css";

import game from "reducers/game"
import { fetchGame } from 'reducers/game'
import { NameInput, StartButton } from "./Style"


const StartPage = () => {
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    let navigate = useNavigate()

    const onNameSubmit = (name) => {
        dispatch(game.actions.setUserName(name))
        navigate('/MainGame')
        setName('')
      }

    const onSetName = (event) => {
        setName(event.target.value)
    }

    const onEnter = (event) => {
        if (event.key === 'Enter') {
          onNameSubmit(name)
          dispatch(fetchGame(name))
        }
      }

    const onStart = () => {
        onNameSubmit(name)
        dispatch(fetchGame(name))        
    }

    return(
        <div>
            
            <NameInput 
                type='text'
                className="name-input"
                value={name}
                placeholder='>Enter name here'
                onChange={onSetName}
                onKeyDown={(event) => {
                    onEnter(event)

                    
                }}
            />
                    <div class="nes-field is-inline">
                    <label for="dark_field">.input.is-dark</label>
                    <input type="text" id="dark_field" class="nes-input is-dark" placeholder="dark.css" />
                    </div>

            <StartButton 
                className="start-btn"
                disabled={name.length === 0}
                onClick={() => onStart()}>
                Start Game!
            </StartButton>
        </div>

     )


}

export default StartPage