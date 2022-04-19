import React from 'react'
import styled from "styled-components/macro"

const LoaderContainer = styled.div`
background-color: black;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: lime;

`

const Testing = () => {
  return (
    <LoaderContainer><h1>Loading... </h1></LoaderContainer>
  )
}

export default Testing