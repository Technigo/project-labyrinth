import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { Link } from "react-router-dom";

import maze from "../reducers/maze"
import {firstFetch} from "../reducers/maze"


const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onButtonClick = () => {
        dispatch(maze.actions.startGame(inputValue))
        setInputValue('')
        dispatch(firstFetch());
    }
    
    return (
        <main className='start-screen'>
            <div className='game-container'>
                <h1>
                    Welcome!
                </h1>
                <input
                    type='textarea'
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
                <Link to="/game">
                    <button onClick= {() => onButtonClick()} >
                    Start game
                    </button>
                </Link>
            </div>
        </main>
    )

}

export default StartScreen