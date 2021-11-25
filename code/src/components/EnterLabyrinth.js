import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { game, generateGame } from '../reducers/game'

export const EnterLabyrinth = () => {
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(generateGame())
  }

  return (
    <Main>
      <h1>The Labyrinth</h1>
      <p>What shall we call you, oh lost one?</p>
      <Form onSubmit={handleSubmit} className='input-form'>
        <label>
          Player name:
          <input
            type="text"
            onChange={handleInputChange}
            required
          />
        </label>
        <StartButton type="submit">Enter Labyrinth</StartButton>
      </Form>
    </Main>
  )
}

//styling
const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100vh;

h1 {
  margin-bottom: 40px;
  font-size: 24px;
}

p {
  font-size: 16px;
}
`
const Form = styled.form`
margin-top: 25px;

input {
background: transparent;
appearance: none;
border: none;
border-bottom: 2px solid orange;
margin: 5px;
}
` 
const StartButton = styled.button`
  background: #F2C409;
  margin: 0 auto;
  margin-top: 40px;
  cursor: pointer;
  display: block;
  position: relative;
  text-align: center;
  font-size: 14px;
  padding: 20px;
  text-decoration: none; 
  color: white;
  box-shadow: inset -3px -3px 0 0 #E59400;

  &:hover,
  &:focus {
    background: orange;
    box-shadow: inset (-3px*1.5) (-3px*1.5) 0 0 #E59400;
  }

  &:active {
        box-shadow: inset 3 3 0px 0px #E59400;
    }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &:before {
    top: -5px;
    left: 0;
    border-top: 5px #fff solid;
    border-bottom: 5px #fff solid;
  }

  &:after {
    left: -5px;
    top: 0;
    border-left: 5px #fff solid;
    border-right: 5px #fff solid;
  }
`
