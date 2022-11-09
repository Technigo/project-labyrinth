import React from 'react'
import styled from 'styled-components/macro'

const CardContainer = styled.div`
box-shadow: 0px 2px 1px -1px #000000;
padding: 20px;
border-radius: 6px;
background: #fff; 

`
const Title = styled.h1`
margin: 0;
font-size: 24px;
`
const SecondaryTitle = styled.p`
margin: 0;
color: #6b6b6b;
`
const StartButton = styled.button`
color: red;
`
const TestChild = styled.div`
color: green;
`
export const GameCard = ({ title, secondaryTitle, startButton, children }) => (
    <CardContainer>
        {title && <Title>{title}</Title>}
        {secondaryTitle && <SecondaryTitle>{secondaryTitle}</SecondaryTitle>}
       {startButton && <StartButton>{startButton}</StartButton>}
       {children && <TestChild>{children}</TestChild>}
    </CardContainer>
)