import React from 'react';
import { useDispatch, useSelector,  } from 'react-redux';

import { secondFetch } from "../reducers/maze"

const GameScreen = () => {

    const description = useSelector(store => store.maze.description.description)

    const dispatch = useDispatch();

    const actions = useSelector(store => store.maze.actions)

    const isLoading = useSelector(store => store.maze.isLoading )

    if (isLoading === false) {
        return (
        <main className='game-screen'>
        <div className='game-container'>
            <h1>
                Welcome!
            </h1>
            <p className="white-color"> Description:
            {description}
            </p>
            {actions.map((action) => (
                <div key={action.description}>
                <p>{action.description}</p>
                <button onClick={() => secondFetch(action.direction)}>{action.direction}</button>
            </div>
            ))}

        </div>
    </main>
    )
    }

    return (
        <main className='game-screen'>
            <div className='game-container'>
                <h1>
                    Game is loading... Please wait.
                </h1>
                </div>
        </main>
    )
}

export default GameScreen