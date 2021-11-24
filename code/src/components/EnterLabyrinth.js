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
        <StartButton type="submit">Enter the Labyrinth</StartButton>
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
appearance: none;
border: 2px solid #fff;
background-color: orange;
color: #fff;
padding: 10px;
border-radius: 6px;
display: block;
margin: 0 auto;
margin-top: 40px;

&:hover {
  background-color: orangered;
}
`
