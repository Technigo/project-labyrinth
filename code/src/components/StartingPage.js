/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import steps, { fetchStart } from 'reducers/steps'

const StartingPage = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUserSet = () => {
    console.log(inputValue)
    dispatch(steps.actions.setUsername(inputValue))
    dispatch(fetchStart())
  }

  return (
    <>
      <Welcome>
        <h1>Welcome Explorer!</h1>
      </Welcome>
      <NameInput
        type="text"
        value={inputValue}
        placeholder="Type you name.."
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onUserSet()}
        required
      />

      <StartButton onClick={onUserSet}>ENTER</StartButton>
    </>
  )
}

export default StartingPage

const Welcome = styled.div`
  h1 {
    font-size: 70px;
    text-shadow: 1px 1px black;
  }
`
const NameInput = styled.input`
  background-color: white;
  font-size: 30px;
  line-height: 50px;
  color: black;
  padding: 0px 5px;
  border: none;
  outline: none;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 1px;
  text-align: center;
  font-family: Bayon;
  letter-spacing: 2px;
`

const StartButton = styled.button`
  margin: 50px;
  padding: 8px 18px;
  background: black;
  color: white;
  border-radius: 2px;
  border: 1px solid black !important;
  cursor: pointer;
  font-family: Bayon;
  letter-spacing: 2px;
  font-size: 18px;
`
