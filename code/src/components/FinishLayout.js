import React from 'react'

import styled from 'styled-components'

const Blinking = styled.div `
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`
const Container = styled.div `
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-around; 
`
const FinishLayout = () => {
  return(
    <Container>
      <i class="nes-octocat animate"></i>
      <Blinking>
        <i class="nes-icon trophy is-large"></i>
      </Blinking>
    </Container>
  )
  }

export default FinishLayout