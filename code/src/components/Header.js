import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.header`
display: flex;
padding-top: 1rem;
text-align: center;
justify-content: center;
align-items:center;
`

const Title = styled.h1`
font-size: 1.5rem;
padding:0;
margin: 0;
font-family: 'Monoton', cursive;

@media (min-width: 768px) {
    font-size: 2rem;
  }
@media (min-width: 1000px) {
    font-size: 2.5rem;
  }

`

export const Header = () => {
    return(
        <HeaderStyle>
            <Title>LABYRINTH</Title><img src="https://img.icons8.com/external-others-pike-picture/50/000000/external-maze-greece-others-pike-picture.png"/><Title>GAME</Title>
        </HeaderStyle>
    )
}