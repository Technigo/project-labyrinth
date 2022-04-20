import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateAction } from 'reducers/game'

const GameScreen = () => {
    const startDescription = useSelector(store => store.game.username.description)
    // console.log(description)
    
    const actions = useSelector(store => store.game.username.actions)
    // console.log(actions)
    const dispatch = useDispatch()

    const onActionRegenerate = (gameAction) => {
        dispatch(generateAction(gameAction))
    }

    return (
    <>
        <h3>This is description : {startDescription}</h3>
        {actions?.map(action => (
            <div>
                <p>{action.description}</p>
                <button 
                    key={action.description} 
                    onClick={() => onActionRegenerate(action)}
                >
                    {action.direction}
                </button>
            </div>
        ))}
    </>
    )
}
export default GameScreen