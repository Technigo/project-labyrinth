import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components/macro"


import { startThunk, game } from '../reducers/game'

import { Game } from './Game'

const Title = styled.h1`
    font-family: 'Permanent Marker', cursive;
    color: #EE088D;
    text-shadow: 3px 3px yellow;
    display: flex;
    text-align: center;
    align-item: center;
    margin:0 auto;`

export const Welcome = () => {
    const dispatch = useDispatch()
    let navigate= useNavigate()
    const [newUserName, setNewUserName] = useState('')
    //const [showBeginning, setShowBeginning] = useState(true)
    
    const onStart = () => {
        navigate('/game')
        dispatch(startThunk(newUserName))
        dispatch(game.actions.setUserName(newUserName))
        //setShowBeginning(false)
        } // a function to start the game and invoke the first Thunk whilst setting the username

       
            return (
                <>
            <Title>Welcome to the Labryinth</Title>
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
                    </>
        )
        } 
        