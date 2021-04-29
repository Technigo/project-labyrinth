import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { games, createNewPlayer } from '../reducers/games'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
      e.preventDefault()

      if (inputValue !== '') {
        dispatch(games.actions.setUserName(inputValue))
        dispatch(createNewPlayer(inputValue))
      } 
        setInputValue('')
    }

    return (
        <StartScreenBox>
            <StartScreenTitle>Insert Name and get ready to play</StartScreenTitle>
            <StartScreenForm onSubmit={onFormSubmit}>
                <StartScreenInput
                    type="text"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    placeholder="Type your name..."
                />
                <StartScreenButton onClick={onFormSubmit}>Start</StartScreenButton>
            </StartScreenForm>
        </StartScreenBox>
    )
}

const StartScreenBox = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: black;
    background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
    width: 400px;
    height: 300px;
`

const StartScreenTitle = styled.h1`
    font-size: 18px;
    color: white;
    font-family: Inconsolata, monospace;
    text-shadow: 0 0 5px #C8C8C8;
`

const StartScreenForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StartScreenInput = styled.input`
    margin: 0 0 20px 0;
    width: 200px;
    background-color: black;
    color: grey;
    border-color: grey;
`

const StartScreenButton = styled.button`
    width: 100px;
`
export default StartScreen