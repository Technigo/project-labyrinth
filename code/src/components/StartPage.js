import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import game, { fetchFirstQuestion } from '../reducers/game'
import styled from 'styled-components/macro'
import img from '../assets/labyrinth.jpg'


const StartPage = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const onUsernameInput = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUsername(input))
        dispatch(fetchFirstQuestion(input))
    }


    return (
        <MainWrapper>
            <FormWrapper onSubmit={onUsernameInput}>
                <h1>Welcome to labyrinth maze</h1>
                <UserInput
                    type="text"
                    value={input}
                    placeholder="YOUR NAME"
                    onChange={(event) => setInput(event.target.value)}
                    minLength="3"
                    maxLength="20"
                    required
                />
                <StartButton
                    type="submit">
                    Enter labyrinth</StartButton >
            </FormWrapper>
        </MainWrapper>
    )
}

export default StartPage

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const UserInput = styled.input`
    padding:7px;
    border: none;
    font-size: 16px;
    background-color: black;
    border-top: none;
    border-right:none;
    border-left: none;
    border-bottom: 2px solid whitesmoke;
    margin: 10px 0px 20px 0px;
    color: white;
    border-radius: 6px;
`

const StartButton = styled.button`
    margin-top: 10px;
    padding:10px;
    border-radius: 15px;
    color:black;
    font-size: 18px;
    font-weight: bold;
    background-color: #01FFC3;
    border: none;
    font-family: 'Cinzel Decorative', cursive;
    cursor: pointer;
    &:hover{
        color: #01FFC3;
        background-color: black;
    }
    @media (min-width: 992px) {
        font-size: 20px;
    }
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