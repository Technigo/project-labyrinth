import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import 'nes.css/css/nes.min.css'

import game from '../reducers/game'
import { startGame } from '../reducers/game'

const StyledStartPage = styled.div`
  font-size: 10px;
  padding: 10px;
  background-color: black;
  color: lime;
  height: 100vh;
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width:768px) {
    font-size: 15px;
  }
`

const StyledForm = styled.form`
  margin-top: 10px;
`

const StyledSubmit = styled.button`
margin-left: 10px;
`

const Start = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onUserNameSet = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUsername(inputValue))
        dispatch(startGame())
    }

    const currentPosition = useSelector((state) => state.game.currentPosition)

    return (
        <>
            {!currentPosition &&
                <StyledStartPage>
                    <h1>Welcome to the labyrinth!</h1>
                    <StyledForm onSubmit={onUserNameSet}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your name here..."
                            required
                        />
                        <StyledSubmit type="submit">Submit</StyledSubmit>
                    </StyledForm>
                </StyledStartPage>}
        </>
    )
}

export default Start
