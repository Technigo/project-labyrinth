import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateAction } from '../reducers/game'
import EndScreen from './EndScreen'

const GameScreen = () => {
    const startDescription = useSelector(store => store.game.actions.description)
    
    const actions = useSelector(store => store.game.actions.actions)
    console.log(actions)
    const dispatch = useDispatch()

    const onActionRegenerate = (type, direction) => {
        dispatch(generateAction(type, direction))
    }

    if (actions?.length === 0) {
        return (
            <EndScreen />
        )
      }


    return (
        <div class="nes-container with-title is-centered">
        <p class="title">The Maze</p>
        <h3>{startDescription}</h3>
        {actions?.map(action => (
            <div>
                <p>{action.description}</p>
                <button type="button" class="nes-btn is-success"
                    key={action.description} 
                    onClick={() => onActionRegenerate(action.type, action.direction)}
                    //  onClick={() => dispatch(generateAction(action.type, action.direction))}
                >
                    {action.direction}
                </button>
            </div>
        ))}
    </div>
    )
}
export default GameScreen