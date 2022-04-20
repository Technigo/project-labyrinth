import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { fetchGameSteps } from '../reducers/game';

import { useNavigate } from 'react-router-dom';

const MainGame = () => {
    const gameObject = useSelector((store) => store.game.gameObject)
    const username = useSelector((store) => store.game.username)
    const history = useSelector((store) => store.game.history)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onRestartClick = () => {
        navigate('/')
    }

    return (
        <section>
            <div>
                <p>User: {username} </p>
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
       
            {gameObject.coordinates === "1,3" && (
                <div>
                    <h3>You won!</h3>
                    <button onClick={onRestartClick}>
                        Restart{' '}
                    </button>
                </div>
            )}
             </div>
             
        </section>
    )
}

export default MainGame