import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import game from '../reducers/game'

const WelcomePage = () => {
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const onNameSet = () => {
        console.log(game.actions.setUsername(name))
        // dispatch(game.actions.setUsername(name))
    }

    return(
        <>
            <input 
                type='text'
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <button
                onClick={onNameSet}
            >Submit</button>
        </>
    )
}

export default WelcomePage