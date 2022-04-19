import React from "react"
import { useDispatch } from "react-redux"

import { game } from "reducers/game"
import { startGame } from "reducers/game"
import styled from "styled-components"

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Start = () => {

    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        dispatch(game.actions.setUsername(event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(startGame())
    }
    return (
        <Section>
            <h1>Start game</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Username:
            <input 
            type="text"
            onChange={handleInputChange}
            required/>
            </label>
            <button type="submit">Start</button>
            </form>
        </Section>
    )
}
