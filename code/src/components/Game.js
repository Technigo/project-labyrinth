import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startThunk, actionThunk, game } from '../reducers/game'

export const Game = () => {
    const dispatch = useDispatch()
    const gameInformation = useSelector((store) => store.game)
    const [newUserName, setNewUserName] = useState('')
    const [showBeginning, setShowBeginning] = useState(true)

    const onStart = () => {
        dispatch(startThunk(newUserName))
        dispatch(game.actions.setUserName(newUserName))
        setShowBeginning(false)
    } // a function to start the game and invoke the first Thunk whilst setting the username

    const onAction = (action) => {
        dispatch(actionThunk(newUserName, action))
    } // a function to continue the game, invoking the second thunk (and API), with user name and action arguments 

    return (
        <>
            {showBeginning && (

                <form onSubmit={() => onStart()}>
                    <input
                        type="text"
                        placeholder="Your User Name"
                        onChange={(event) => setNewUserName(event.target.value)}
                        value={newUserName}>
                    </input>
                    <button


                        type='submit'
                    >Start The Game </button>

                </form>

            )}


            {!showBeginning && (
                <>
                <div>
                    <div>{newUserName}</div>
                    {gameInformation.description}
                    {gameInformation.actions.map((action) => (
                        <button
                            key={action.coordinates}
                            onClick={() => onAction(action)}>
                            {action.type} {action.direction} {action.description}
                        </button>
                        ))}

                </div>
                </>
            )}


        </>
    )
}