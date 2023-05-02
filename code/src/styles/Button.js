import styled from 'styled-components';

export const Button = styled.button`
background-color: yellowgreen;
padding: 20px 30px 20px 30px;
font-family: "Press Start 2P";
border: 3px solid black;
color: white;

:hover {
    background-color: #7cb51b;
    cursor: pointer;
}
@media (max-width : 428px)  {
    font-size: 10px;
}

`

export const DirectionButton = styled.button`
background-color: #fac905;
padding: 10px 20px 10px 20px;
font-family: "Press Start 2P";
border: 2px solid black;
color: white;
align-self: center;

:hover {
    background-color: #fab005;
    cursor: pointer;
}
`