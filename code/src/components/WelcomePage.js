import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import game, { registerNewPlayer } from '../reducers/game'

import WelcomeMessage from './WelcomeMessage'

const WelcomePage = () => {
    const [name, setName] = useState('')
    const userName = useSelector((store) => store.game.username)

    const dispatch = useDispatch()

    const onNameSet = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUsername(name))
        dispatch(registerNewPlayer(name))
        setName('')
    }

    return(
        <>
            <header>
                <h1>Add title of game</h1>
                <p>Welcome text.</p>
            </header>
            <form onSubmit={onNameSet}>
                <input 
                    placeholder="Write your username"
                    type='text'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <button
                    type="submit"
                >Start game!</button>
            </form>
            {userName && <WelcomeMessage userName={userName} />}
        </>
    )
}

export default WelcomePage