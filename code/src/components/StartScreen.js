import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import game from '../reducers/game'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onPlayerSet = () => {
        dispatch(game.actions.setPlayer(inputValue))
    }

    return (
        <div>HiPlayer!
            <input
            type="text"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
        />

        <button onClick={onPlayerSet}>Start game!</button>
        </div>
    )

}

export default StartScreen
