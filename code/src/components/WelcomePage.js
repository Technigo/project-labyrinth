import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import game from '../reducers/game'
import WelcomeMessage from './WelcomeMessage'

const WelcomePage = () => {
    const [name, setName] = useState('')
    const userName = useSelector((store) => store.game.username)

    const dispatch = useDispatch()

    const onNameSet = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUsername(name))
        setName('')
    }

    return(
        <>
           {!userName && (
               <div>
                    <header>
                        <h1>Technigo Labyrinth game</h1>
                    </header>
                    <form onSubmit={onNameSet}>
                        <label htmlFor='user-input'>
                            Enter a username:
                            <input 
                                id='user-input'
                                type='text'
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </label>
                        <button type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
           )} 
           {userName && <WelcomeMessage userName={userName} />}
        </>
    )
}

export default WelcomePage