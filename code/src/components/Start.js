import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import 'nes.css/css/nes.min.css'

import game from '../reducers/game'
import { startGame } from '../reducers/game'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
      margin-bottom: 10px;
  }
`
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
                    <StyledForm onSubmit={onUserNameSet}>
                        <h1>Welcome to the labyrinth!</h1>
                        <p>What's your name?</p>
                        <input type="text"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </StyledForm>
                </StyledStartPage>}

        </>


    )
}

export default Start