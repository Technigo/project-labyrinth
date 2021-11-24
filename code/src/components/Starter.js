import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components"

import { maze, startMaze } from "../reducers/maze"

const InputContainer = styled.div`
    padding: 30px;
    margin: 10px;
    border: 1px solid black;
`

export const Starter = () => {
    const [userName, setUserName] = useState('')

    const dispatch = useDispatch()

    const startGame = () => {
        dispatch(maze.actions.setUserName(userName))
        dispatch(startMaze(userName))
    }



    return (
        <>
        <InputContainer>
            <input type="text" value={userName} placeholder="here your name goes" onChange={(event) => setUserName(event.target.value)} />
            <button onClick={startGame}> Start </button>
        </InputContainer>
        </>


    )
}