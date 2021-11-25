import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"

import { startMaze } from "../reducers/maze"

/* import { NavButton } from "styling/styling" */

// Styled components
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid black;
    border-radius: 10px;
`
const StyledInput = styled.input`
    background-color: rgba(255, 255, 255, 0.7);
    max-width: 300px;
    height: 20px;
    padding: 10px;
    border-radius: 10px;
    border: none;
`
const NavButton = styled.button`
    background-color: lightblue;
    border: none;
    border-radius: 10px;
    width: 60px;
    padding: 10px;
`

// Starter component
export const Starter = () => {
    const [userName, setUserName] = useState('')
    const user = useSelector((store)=>store.maze.username)
    console.log("user", user)  // CONSOLE

    const dispatch = useDispatch()

    const startGame = () => {
        dispatch(startMaze(userName))
    }

    const checkKey = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            startGame(event)
        }
    }

    return (
        <>
        <InputContainer>
            <StyledInput type="text" value={userName} placeholder="here your name goes" onChange={(event) => setUserName(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
            <NavButton onClick={startGame}> Start </NavButton>
        </InputContainer>
        </>
    ) 
}