import styled from 'styled-components';
import maze from '../components/img/maze.png';

export const GameScreenSection = styled.section`
background-color: green;
background-image: url(${maze});
height: 100vh;
display: flex;
flex-direction: column;
gap: 5%;
align-items: center;
justify-content: center;
`

export const GameSection = styled.section`
font-family: "Press Start 2P";
font-size: 1em;
line-height: 1.6em;
background: white;
border: 10px solid black;
align-self: center;
width: 60%;
margin-right: auto;
margin-left: auto;
padding: 10%;
margin-bottom: 2%;

@media (max-width: 770px) {
    font-size: 10px;
}`