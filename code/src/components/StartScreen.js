import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import games from '../reducers/games'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <form>
            <input
                type="text"
                value=""
                onChange=""
                placeholder="Type your name..."
            />
            <button onClick="">Enter</button>
        </form>
    )
}

export default StartScreen