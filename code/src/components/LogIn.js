/* eslint-disable linebreak-style */
import React from "react";
import { useDispatch } from 'react-redux';
import  Labyrinth  from './Labyrinth'
import  StartPage  from './StartPage'
import { game } from 'reducers/store'

export const LogIn = () => {
    const dispatch = useDispatch
    const userName = () => {
        dispatch(game.actions.username)
    }
    const continueQuest = () => {
        return(<Labyrinth />)
    }

    const newGame = () => {
        return (<StartPage />)
    }
    
    return(
        <>
        <h2> Welcome back {userName} </h2>
        <h3>Would you like to start your journey when you left or from the beginning?</h3>
        <div>
            <button onChange={continueQuest}>Continue game</button>
            <button onChange={newGame}>Start new game</button>
        </div>
        </>
    )
}