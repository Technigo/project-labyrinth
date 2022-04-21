import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateAction } from '../reducers/game'

const GameScreen = () => {
    const startDescription = useSelector(store => store.game.actions.description)
    
    const actions = useSelector(store => store.game.actions.actions)
    console.log(actions)
    const dispatch = useDispatch()

    const onActionRegenerate = (type, direction) => {
        dispatch(generateAction(type, direction))
    }

    return (
    <div>
        <h3>This is description : {startDescription}</h3>
        {actions?.map(action => (
            <div>
                <p>{action.description}</p>
                <button 
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