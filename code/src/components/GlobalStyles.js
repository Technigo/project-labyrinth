import styled from 'styled-components'

export const OuterWrapper = styled.div`
background-color: beige;
padding: 5% 5%;
`

export const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: violet;
padding: 5% 5%;
border-radius: 5px;
max-width: 600px;
min-height: 50vh;
margin: 0 auto;
width: 90%;
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
    background-color: black;
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