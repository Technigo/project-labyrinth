import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import game, { fetchFirstQuestion } from '../reducers/game'
import styled from 'styled-components/macro'
import img from '../assets/labyrinth.jpg'


const StartPage = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const onUsernameInput = (event, input) => {
        dispatch(game.actions.setUsername(input))
        event.preventDefault()
        dispatch(fetchFirstQuestion(input))
    }

    return (
        <MainWrapper>
            <FormWrapper>
                <HeaderGame>Welcome to the maze</HeaderGame>
                <UserInput
                    type="text"
                    value={input}
                    placeholder="YOUR NAME"
                    onChange={(event) => setInput(event.target.value)}
                    maxLength="15"
                />
                <StartButton
                    type="button"
                    disabled={input < 5}
                    onClick={(event) => onUsernameInput(event, input)}
                >
                    Enter labyrinth</StartButton >
            </FormWrapper>
        </MainWrapper>
    )

}

export default StartPage

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderGame = styled.h1`
    text-align: center;
    font-size: 35px;
    font-family: 'Cinzel Decorative', cursive;
`
const UserInput = styled.input`
    padding:7px;
    border: none;
    background-color: black;
    border-top: none;
    border-right:none;
    border-left: none;
    border-bottom: 2px solid whitesmoke;
    margin: 20px 0px;
    color: white;
    border-radius: 6px;
`

const StartButton = styled.button`
    margin-top: 10px;
    padding:10px;
    border-radius: 15px;
    color:white;
    font-size: 18px;
    font-weight: bold;
    background-color: green;
    border: none;
    font-family: 'IBM Plex Serif', serif;
`
const MainWrapper = styled.main`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`