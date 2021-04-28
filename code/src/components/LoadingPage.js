import React from 'react'

import styled from 'styled-components'

// const LoadingContainer = styled.div`
//   display: flex; 
//   justify-content: center; 
//   font-size: 40px; 
//   color: #59e686;
//   width: 100vw; 
//   height: 100vh;
//   background-color: #0000; 
// `
const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #59e686;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 25px; 
`

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <p>Loading . . . </p>
    </LoadingContainer>
  )
}

export default LoadingPage
