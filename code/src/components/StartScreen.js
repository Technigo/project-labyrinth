import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';


import game, {generateGame} from '../reducers/game'

const StartScreenContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

const WelcomeCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgba(15,103,72,1) 0%, rgba(5,50,16,1) 99%, rgba(252,176,69,1) 100%);
  padding: 30px;
  border-radius: 5px;
`;

const Button = styled.button`
    margin-top:5px;
    background-color:#3e883e;
    padding:10px;
    color: white;
    border-radius: 5px;
    border: none;
`

const Input = styled.input`
    padding:10px;
    border-radius: 5px;
    border: none;
`



const StartScreen = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const onUsernameSet = () => {
    dispatch(game.actions.setUsername(username))
    dispatch(generateGame());
  }

  return (
    <StartScreenContainer>
      <WelcomeCard>
          <h1>Welcome!</h1>
          <p>Press start to begin your journey!</p>
          <Input
            type="text"
            placeholder="Type your name"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <Button 
            disabled={!username} 
            onClick={onUsernameSet}>START
          </Button>
        </WelcomeCard>
    </StartScreenContainer>
  )
}

export default StartScreen