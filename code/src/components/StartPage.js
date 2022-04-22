import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import "nes.css/css/nes.min.css";

import game from "reducers/game"
import { fetchGame } from 'reducers/game'
import { Wrapper, NameInput, StartButton, StartGame } from "./Style"


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
        <StartGame>

            
            <label for="name_field">Your name</label>
                    
            <NameInput 
                type='text'
                className="nes-input"
                id="name_field"
                tabIndex='0'
                value={name}
                placeholder='>Enter name'
                onChange={onSetName}
                onKeyDown={(event) => {
                onEnter(event)               
               }}
            />
                   
            <StartButton 
                type="button"
                className="nes-btn is-success"
                tabIndex='0'
                disabled={name.length === 0}
                onClick={() => onStart()}>
                Start Game!
            </StartButton>
        </StartGame>

     )


}

export default StartPage