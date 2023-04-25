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

export const GameWrapper = styled.div`
display: flex;
align-items: center;
text-align: center;
padding: 100px;
height: 100vh;
width: 100vw;
background-color: violet;
position: relative;
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