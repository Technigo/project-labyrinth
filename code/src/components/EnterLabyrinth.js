import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import img from '../images/1347872.jpg'
import { Button } from './Button'
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
        <Button type="submit">Enter Labyrinth</Button>
      </Form>
      </TextContainer>
    </Main>
  )
}

//Styling
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
text-align: center;
padding: 20px;
margin: 0 auto;
width: 80vw;
height: auto;
background: rgba(0, 0, 0, 0.6);

@media (min-width: 667px) {
  width: 60vw;
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
margin-top: 15px;
margin-bottom: 20px;
}
` 