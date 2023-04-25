import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux'
import { generateActionData } from '../reducers/labyrinth'

const Container = styled.div`
  padding: 50px;
  max-width: 700px;
  max-height: 600px;
  margin: calc(50% - 220px) auto;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fade-in 2s ease-in forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-align: center;
  @media (max-width: 768px) {
    max-height: 500px;
    padding: 25px;
    overflow: auto;
    }
`
const Description = styled.p`
    font-size: 22px;
    color: white;
    margin-bottom: 15px;
    margin-top: 0;
    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 5px;
      margin-top: 15px;
    }
`
const DirectionContainer = styled.div`
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  margin: auto;
  border: 1px solid #B3D0B6;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  text-align: left;
`

const DirectionDescription = styled.p`
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
`

const DirectionButton = styled.button`
    margin: 5px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background-color: #41614C;
    color: white;
    cursor: pointer;
`

export const LabyrinthCard = ({ description, actions }) => {
  const dispatch = useDispatch()

  console.log('description:', description)
  console.log('actions.length', actions.length, 'actions', actions)
  return (
    <Container>
      <Description>{description}</Description>
      {actions.map((item) => (
        <DirectionContainer key={item.description}>
          <DirectionDescription>{item.description}</DirectionDescription>
          <DirectionButton type="button" onClick={() => dispatch(generateActionData(item.type, item.direction))}>Go {item.direction}</DirectionButton>
        </DirectionContainer>))}
    </Container>
  )
}