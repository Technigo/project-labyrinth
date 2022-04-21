import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import game from '../reducers/game'


const EndScreen = () => {
    const endDescription = useSelector(store => store.game.actions.description)
    console.log(endDescription)

    const dispatch = useDispatch()


return (
    <div>
    <h3>{endDescription}</h3>
    <button onClick={() => dispatch(game.actions.restart())}>Restart</button>
    </div>
)    
}


export default EndScreen
