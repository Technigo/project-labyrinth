import React from 'react';
import { useState } from 'react';
import { game } from 'reducers/store';
import { useDispatch } from 'react-redux';

const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch();

    const test = () => {
        dispatch(game.actions.addUserName(userName))

    }
    return (
        <div>
            <h1> Welcome to the game</h1>
            <input 
            type="text" 
            className="userName" 
            placeholder="Please write your character name"
            onChange={(event) => setUserName(event.target.value)} />
            <button 
            type="submit" 
            onClick={test}> Lets go </button>
        </div>
    )
}
export default StartPage;