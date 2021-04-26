import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { game, fetchStart } from 'reducers/game'

export const StartPage = () => {
const descriptionText = useSelector((store)=>store.game.description)
    const dispatch = useDispatch()

    const startGame = () => {;
        dispatch(fetchStart());
      };

    return (
        <>
            <h1>Welcome to the game</h1>
            <button 
                onClick={() => dispatch(fetchStart())}>
                Start the game
                </button>
                <h2>{descriptionText}</h2>
        </>
    )
}