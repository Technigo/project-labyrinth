import styled from 'styled-components/macro'

export const Button = styled.button`
border: 2px solid #A3F7B5;
text-transform: uppercase;
font-size: 1.1rem;
font-weight: 600;
width: 100px; 
margin: 10px;
height: 30px;
color: #A3F7B5;
border-radius: 4px;
background-color: transparent;
&:hover{
border: 2px solid #E15554;
color: #E15554;
transform: ease 2ms;
transition: 0.7s;
}
`

export const DirectionButton = styled.button`
border: none;
font-size: 1rem;
font-weight: 600;
width: 110px; 
margin: 10px;
height: 30px;
color: #103460;
border-radius: 4px;
background-color: #E15554;

&:hover{
background-color: #A3F7B5;
transition: 0.7s;
}
`