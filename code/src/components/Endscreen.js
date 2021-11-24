import React  from 'react'
import { useDispatch } from 'react-redux'
import { game } from '../reducers/game'

export const Endscreen = () => {
    const dispatch = useDispatch()
    

    const onRestart = () => {
       dispatch(game.actions.restartGame())
    }

return (
    <>
        <div>
            Congratulations, you have made it!
            <button onClick={() => onRestart()}> Press to re-start</button>
        </div>
    </>
)
}