import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startThunk, actionThunk, game } from '../reducers/game'
//import { Welcome } from './Welcome'
import { Endscreen } from './Endscreen'
import styled from "styled-components/macro"

const Body = styled.section `
width: 60%;
background-color: #1C362D;
color: #23C757;
font-family: 'VT323', monospace;
justify-content:center;
border-radius: 10px;`

const ShortDesc= styled.div``

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
                        type="text" required
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
                <Body>
                    <ShortDesc>{gameInformation.description}</ShortDesc>
                    
                    {gameInformation.actions.map((action) => (
                        <div>
                            <div key={action.description}>{action.description}</div>

                            <button
                                key={action.coordinates}
                                onClick={() => onAction(action)}>
                                {action.type} {action.direction}
                            </button>
                        </div>


                    ))}
                    {gameInformation.actions.length === 0 && (
                        //<div>
                        //  Congratulations, you have made it!
                        //<button onClick={() => onAction()}> Press to re-start</button>
                        //</div>
                        <Endscreen />
                    )}

                </Body>

            )}


        </>
    )
}