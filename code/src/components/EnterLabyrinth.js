import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import img from '../images/1347872.jpg'

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
    <Main backgroundImage={img}>
      <TextContainer>
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
      </TextContainer>
    </Main>
  )
}

//styling
const Main = styled.main`
width: 100%;
height: 100vh;
overflow: hidden;
background-image: url("${props => props.backgroundImage}");
background-size: cover; 
background-repeat: no-repeat;
background-attachment: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
  margin-bottom: 40px;
  font-size: 24px;
}

p {
  font-size: 16px;
}
`
const TextContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
border: 3px dashed #fff;
padding: 20px;
margin: 0 auto;
width: 60vw;
height: auto;
background: #000000;
opacity: 0.7;
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
