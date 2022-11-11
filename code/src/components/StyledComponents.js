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
  flex-direction: row;
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
    flex-direction: column;
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
  font-size: 25px;
`
const TestChild = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

`

export const GameCard = ({ title, secondaryTitle, children }) => (
  <Card>
    <CardContainer>
      {title && <Title>{title}</Title>}
      {secondaryTitle && <SecondaryTitle>{secondaryTitle}</SecondaryTitle>}
      {children && <TestChild>{children}</TestChild>}
    </CardContainer>
  </Card>
)