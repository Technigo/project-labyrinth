import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {useDispatch} from 'react-redux'

import labyrinth, { generateStory } from '../reducers/labyrinth'

const Container = styled.div`

`

const Title = styled.h1`
`

const Start = styled.div`
`

const Username = styled.input.attrs({ type: "text"} )`
`

const StartButton = styled.button`
`

const StartScreen = () => {
    const [userInput, setUserInput] = useState()
    const dispatch=useDispatch();

const onUsernameSet = () => {
    dispatch(labyrinth.actions.setUsername(userInput));
    dispatch(generateStory())

}

  return (
    <Container>
      <Title>Labyrinth</Title>
      <Start>
          <Username value={userInput} onChange={(e)=> setUserInput(e.target.value)}></Username>
          <StartButton onClick={onUsernameSet}>Start the game!</StartButton>
      </Start>
    </Container>
  )
};

export default StartScreen;