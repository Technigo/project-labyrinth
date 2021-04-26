import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`

const Description = styled.h2`
`

const NextButton = styled.button`
`

const Next = styled.div`
`

const GameScreen = () => {

  return (
    <Container>
      <Description>Description</Description>
      <Next>
        <NextButton>East</NextButton>
        <NextButton>West</NextButton>
      </Next>
    </Container>
  )
}

export default GameScreen;