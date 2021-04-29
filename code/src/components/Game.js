import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { nextStep } from '../reducers/games'

const Game = () => {
    const userName = useSelector(store => store.games.username)
    const actions = useSelector(store => store.games.description)
    const description = useSelector(store => store.games.description.description)
    const loading = useSelector(store => store.games.loading)

    console.log(actions)

    const dispatch = useDispatch()

return (
    <>
        <div>
            {loading && <h1>LOADING...</h1>}
            <p>{description} </p>
        </div>
        {actions.actions.map(action => (
            <div key={userName}>
                <p>{action.description}</p>
                <button   
                    onClick={() => dispatch(nextStep(userName, action.direction))}>
                    {action.direction}
                </button>
            </div>
        ))}
    </>
)}


export default Game