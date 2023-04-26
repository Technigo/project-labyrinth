import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
`
export const Outerwrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items:center;
justify-content: center;
background-size: cover;
background-color: white;
`

export const Innerwrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`