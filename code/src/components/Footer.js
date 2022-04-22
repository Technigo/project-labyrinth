import React from "react"
import styled from "styled-components"

const FooterDiv = styled.footer`
display: flex;
padding-top: 1rem;
text-align: center;
justify-content: flex-start;
align-items:center;
position: absolute;
bottom:0;
width: 100vw;
`

const Title = styled.p`
padding:10px;
`

export const Footer = () => {
    return(
        <FooterDiv>
            <Title>Page done by Anki & Kristiina</Title>
        </FooterDiv>
    )
}