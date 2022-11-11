import React from 'react'
import styled from 'styled-components/macro'

const Card = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 300px;
  min-height: 300px;
  height: auto;
  border: 6px double;
  border-radius: 15px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: #f7f5e1;

  @media (min-width: 768px) {
    min-width: 600px;
    padding: 30px;
  }

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
inherits: inherit;
display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

`
const DescriptionText = styled.p`
color: red;
`

export const GameCard = ({ title, secondaryTitle, descriptionText, startButton, children }) => (
  <Card>
  <CardContainer>
    {title && <Title>{title}</Title>}
    {secondaryTitle && <SecondaryTitle>{secondaryTitle}</SecondaryTitle>}
    {descriptionText && <DescriptionText>{descriptionText}</DescriptionText>}
    {startButton && <StartButton>{startButton}</StartButton>}
    {children && <TestChild>{children}</TestChild>}
  </CardContainer>
  </Card>
)


/* If else for the first header  */
/* text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 
0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; */