import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import games, { startGame } from '../reducers/games'

const Container = styled.div`
background-color: black;
color: white;
padding: 15px;
display: inline-block;
width: auto;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
`

const Button = styled.button`
background-color: gold;
color: black;
border: 2px solid black;
border-radius: 10px;
text-align: center;
padding: 10px;
margin: 10px;
`

const Input = styled.input`
border-radius: 10px;
padding: 10px;
margin: 10px;
`

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onUserNameSet = () => {
        dispatch(games.actions.setUserName(inputValue))
        dispatch(startGame(inputValue))
    }

    return (
        <>
        <Container>
        <h1>Welcome to our splendid game! Type your name and start...</h1>
            <Input 
                type='text'
                placeholder='Enter your name to start'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                required
            />
            <Button onClick={onUserNameSet}>Start the game!</Button>
            </Container>
        </>
    )
}

export default StartScreen
