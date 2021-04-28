import React from 'react'

import styled from 'styled-components'

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
    <i class="nes-icon trophy is-large"></i>
  </Container>
)
}

export default FinishLayout