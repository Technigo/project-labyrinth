import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.header`
display: flex;
top: 50px;
text-align: center;
justify-content: center;
`

const Title = styled.h1`
font-size: 30px;
`

export const Header = () => {
    return(
        <HeaderStyle>
            <Title>Cave labyrinth</Title>
        </HeaderStyle>
    )
}