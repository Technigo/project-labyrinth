import React from "react";
import { useDispatch } from 'react-redux';

export const LogIn = () => {
    dispatch(game.actions.setUserName(userName))
    return(
        <>
        <h2> Welcome back {userName} </h2>
        <h3>Would you like to start your journey when you left or from the beginning?</h3>
        <div>
            <button>Continue game</button>
            <button>Start new game</button>
        </div>
        </>
    )
}