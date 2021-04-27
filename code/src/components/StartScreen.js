import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import maze from "../reducers/maze"
import { firstFetch } from "../reducers/maze"


const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const loading = useSelector(store => store.maze.isLoading)

    const onButtonClick = () => {
        dispatch(maze.actions.startGame(inputValue))
        setInputValue('')
        dispatch(maze.actions.setLoading(!loading))
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