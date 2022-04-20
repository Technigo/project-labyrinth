import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

import game from "reducers/game"
import { fetchGame } from 'reducers/game'


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
            <form>
                <input 
                    type="text"
                    value={name}
                    placeholder="Enter username"
                    onChange={onSetName}
                    onKeyDown={(event) => {
                        onEnter(event)
                    }}
                />
            </form>

            This is the start!
            <button 
                disabled={name.length === 0}
                onClick={() => onStart()}>
                Start Game!
            </button>
        </div>

     )


}

export default StartPage