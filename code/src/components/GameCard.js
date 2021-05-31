import React from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'

import { gameContent } from 'reducers/labyrinth'

const Container = styled.div`
  box-shadow: 0 0 10px rgb(152,124,133);
  border-radius: 6px;
  border: none;
  background-color: rgba(152,124,133, 0.5);
  margin: 10px 0;
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 
  @media (min-width: 768px) {
    width: 300px;
    margin: 20px;
  }
  @media (min-width: 1024px) {
  
  }
`

const DescriptionText = styled.p`
  margin: 0;
  color: #3b2e36;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }
`
const CustomButton = styled.button`
  border-radius: 6px;
  border: 2px solid #3b2e36;
  background-color: rgba(82,88,13, 0.7);
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  font-family: 'New Tegomin', serif;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
    padding: 5px 15px;
  }

  &:hover {
    background-color: rgba(82,88,13, 0.5);
  }
`

export const GameCard = ({action}) => {
  const dispatch = useDispatch()

  const onSetDirection = (action) => {
    dispatch(gameContent(action))
  }

  return (
      <Container>
          <DescriptionText>{action.description}</DescriptionText>
          <CustomButton onClick={() => onSetDirection(action)}>HEAD {action.direction.toUpperCase()}</CustomButton>
      </Container>
  )
}