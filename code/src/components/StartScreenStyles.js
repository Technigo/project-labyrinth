import styled from 'styled-components';
import background from '../images/startscreen.png'

export const StartScreenWrapper = styled.div`
background: url(${background});
background-size: cover;
width: 100vw;
height: 100vh;
background-attachment: fixed;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

`
export const MazeIcon = styled.img`
width: 100%;
height: 100%;
`

export const IconContainer = styled.div`
width: 8rem;
height: 8rem;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const StartScreenText = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 1.5rem;
color: white;
`
export const TextContainer = styled.div`
display: flex;
flex-direction: column;
background: rgba(0,0,0,.7);
max-width: 35rem;
border-radius: 2rem;
padding: 1rem;
text-align: center;
animation: fade-in 2s ease-in forwards;
`