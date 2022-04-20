import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGameSteps } from '../reducers/game'

import { useNavigate } from 'react-router-dom'

import {
    GameArea
} from 'styles'


const GamePlay = () => {
    const gameObject = useSelector((store) => store.game.gameObject)
    const username = useSelector((store) => store.game.username)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onRestartClick = () => {
        navigate('/')
    }

    return (

<GameArea >
            <div>
                <h3>{gameObject.description}</h3>
            </div>

            <div>
            {gameObject.actions.length > 0 && (
                <div>
                 {gameObject.actions.map((action) => {
                    return(
                        <div key={action.direction}>
                        <p>{action.description}</p>

                        <button
                            onClick={() => {
                                dispatch(fetchGameSteps({ direction: action.direction }))
                            }}
                        >
                            <span>
                                Go {''}
                                {action.direction +
                                (action.direction === 'North'
                                    ? ' ⬆'
                                    : action.direction === 'South'
                                    ? ' ⬇'
                                    : action.direction === 'West'
                                    ? ' ⬅'
                                    : action.direction === 'East'
                                    ? ' ➡'
                                    : '')}
                            </span>
                        </button>
                    </div>
                    )
                    
                    })}
                </div>
            )}
       
            {!gameObject.actions.length && (
                <div>
                    <h3>You won!</h3>
                    <button onClick={onRestartClick}>
                        Restart{' '}
                    </button>
                </div>
            )}
             </div>
             </GameArea>  
  
    
    )
}

export default GamePlay