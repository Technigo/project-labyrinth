import React from "react"
import { useDispatch } from "react-redux"

import { game } from "reducers/game"
import { startGame } from "reducers/game"
import styled from "styled-components"

const Section = styled.section`
width: 70%;
height: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 100px auto 0 auto;
`
const Text = styled.h2`
font-size: 1rem;
background-color: rgba(0,0,0, 0.5);
padding: 10px;
border-radius:10px;

@media (min-width: 768px) {
    font-size: 1.5rem;
  }
@media (min-width: 1000px) {
    font-size: 2rem;
  }

`

const Label = styled.label`
  font-weight: 900;
`
const PlayButton = styled.button`
  background-color: #fff;
  border: 2px solid #eee;
  width:content-fit;
  border-radius: 10%;
  cursor:pointer;
  &:hover{
    background-color: red;
    color: #fff;
  }
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
            <Text>Welcome playing labyrinth game. Find your way out choosing the direction where to go.</Text>
            <form onSubmit={handleSubmit}>
            <Label>
                Player:
            <input 
            type="text"
            onChange={handleInputChange}
            required/>
            </Label>
            <PlayButton type="submit">Play</PlayButton>
            </form>
        </Section>
    )
}
