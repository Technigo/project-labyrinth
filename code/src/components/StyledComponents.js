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
  color: #e8dba6;
  overflow: scroll;

  @media (min-width: 768px) {
    flex-direction: column;
    min-width: 600px;
    padding: 30px;
  }

`
const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-family: 'Milonga', cursive;
`
const SecondaryTitle = styled.p`
  margin: 0;
  color: #f7f5e1;
  font-size: 25px;
  font-family: 'Darker Grotesque', sans-serif;
`
const StartTitle = styled.h1`
  font-family: 'Uncial Antiqua', cursive;
  margin: 0;
  font-size: 30px;
`
const TestChild = styled.div`

`

export const GameCard = ({ startTitle, title, secondaryTitle, children }) => (
  <Card>
    <CardContainer>
      {startTitle && <StartTitle>{startTitle}</StartTitle>}
      {title && <Title>{title}</Title>}
      {secondaryTitle && <SecondaryTitle>{secondaryTitle}</SecondaryTitle>}
      {children && <TestChild>{children}</TestChild>}
    </CardContainer>
  </Card>
)