import React from 'react'
import styled from 'styled-components'

const Loading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ff00;
  font-size: 30px;
  font-weight: bold;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const Loader = () => {

  return (
    <Container>
      <Loading>Loading...</Loading>
    </Container>
  )
}