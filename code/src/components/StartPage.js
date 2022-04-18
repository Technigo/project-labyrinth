import React from "react"
import { useDispatch } from "react-redux"
import game from "reducers/game"
import startGame from 'reducers/game'


const StartPage = () => {

    const dispatch = useDispatch()

    const onStart = () => {
        dispatch(console.log(startGame))
        
    }

    return(
        <div>
            This is the start!
            <button onClick={() => onStart()}>
                Start Game!
            </button>
        </div>

     )


}

export default StartPage