import styled from 'styled-components'

export const StartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
height: 600px;
gap: 5px;
padding: 10px;
background-color: grey;
margin: 0 auto;
`

export const InnerWrapper = styled.div`
  padding: 100px;
  height: 100vh;
  width: 100vw;
  background-color: beige;
  position: relative;
/* display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: violet;
padding: 5% 5%;
border-radius: 5px;
max-width: 400px;
min-height: 50vh;
margin: 0 auto;
width: 90%; */
`

export const Wrapper = styled.div`
background-color: grey;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const SubmitBtn = styled.button`
    margin: 5px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background-color: green;
    color: white;
    cursor: pointer;
`

export const TextH1 = styled.h1`
font-size: 30px;
color: red;
`
export const TextP = styled.p`
font-size: 20px;
color: black;
`