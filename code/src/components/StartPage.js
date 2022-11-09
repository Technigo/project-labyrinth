/* eslint-disable linebreak-style */
import React from 'react';
import { useState } from 'react';
import { fetchTheGame, game } from 'reducers/store';
import { useDispatch } from 'react-redux';

const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch();

    const test = () => {
        console.log(userName)
        dispatch(game.actions.addUserName(userName))
        dispatch(fetchTheGame()
        )

    }
    /* const gameLore = useSelector((store) => store.game.setCurrentDirection) */
    return (
        <div>
            <h1> Welcome to the game</h1>
            <input 
            type="text" 
            className="userName" 
            placeholder="Please write your character name"
            onChange={(event) => setUserName(event.target.value)}
            value={userName} />
            <button 
            type="submit" 
            onClick={test}> Lets go </button>
        
  {/*       
       {gameLore.map((direction) => {
        return (
            <p>{direction}</p>
        )
       })} */}
       </div>
    )

}
export default StartPage;