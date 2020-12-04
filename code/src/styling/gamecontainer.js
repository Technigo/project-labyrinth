import styled from "styled-components";

export const GameScreen = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: black;
text-align: center;
`

export const DescriptionText = styled.p`
color: #fff;
line-height: 1.6;
padding: 30px;
`

export const ButtonsContainer = styled.div`
display:flex;
`

export const MoveButton = styled.button`
font-family: 'Press Start 2P', cursive;
font-size: 13px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
background-color: #2A0EB2;
width: 160px;
margin: 10px;
padding: 10px;
border: 2px solid #fff;
border-radius: 20px;

    :hover {
        transform: scale(1.1);
        background-color: #2FF631;
    }
`