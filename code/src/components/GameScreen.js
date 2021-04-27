import React, { useState } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import maze from 'reducers/maze';


const GameScreen = () => {

    const description = useSelector(store => store.maze.description.description)
    console.log(description)

    const dispatch = useDispatch();

    return (
        <main className='game-screen'>
            <div className='game-container'>
                <h1>
                    Welcome!
                </h1>
                <p> Description:
                {description}
                </p>
            
                <button>
                    Button
                </button>
            </div>
        </main>
    )
}

export default GameScreen