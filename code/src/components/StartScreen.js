import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';

import maze from "../reducers/maze"


const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();


    const onButtonClick = () => {
        dispatch(maze.actions.startGame(inputValue))
        setInputValue('')
    }
    
    return (
        <div>
            <h1>
                Welcome!
            </h1>
            <input
                type='textarea'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button onClick= {() => onButtonClick()} >
            Start game
            </button>
        </div>
    )

}

export default StartScreen