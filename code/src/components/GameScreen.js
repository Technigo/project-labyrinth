import React from 'react'
import { useSelector } from 'react-redux'
import StartGame from './StartGame'
import ContinueGame from './ContinueGame'


//conditionally render StartGame, where player puts in his name. if not start screen, GameContinue  
// if true render ContinueGame if no value (null) for username: retun false: then render StartGame
//we reach the username thorugh useSelector
const GameScreen = () => {
const username = useSelector(store => store.game.username) 
console.log(username)
   
    return ( 
    <div>
        {username? <ContinueGame /> : <StartGame />}
    </div>
    )
}

export default GameScreen