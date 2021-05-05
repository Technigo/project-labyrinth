import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth, {startLabyrinth} from '../reducers/labyrinth'

import styled from 'styled-components/macro'

const Container = styled.div`
  color: white;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding: 20px;
  text-align: center;
  width: 60%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;

  @media (min-width: 768px) {
    width: 600px;
    padding: 40px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 200px;
  height: 20px;
`

const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 3px;
  color: black;
  font-weight: 500px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  width: 150px;
  height: 40px;
  padding: 5px;
  margin: 5px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
  background-color: #fafafa;
  }`

const StartScreen = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const onGameStart = () => {
    dispatch(labyrinth.actions.setUsername(username))
    dispatch(startLabyrinth(username))
  }

  return (
  <Container>
      <h1>Can you get through the labyrinth?</h1>
      <p>Enter your name here</p>
      <InputContainer>
        <Input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <Button onClick={onGameStart}>Start game</Button>
      </InputContainer>
    </Container>
  )
}

export default StartScreen