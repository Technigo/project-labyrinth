import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux'
import { generateActionData } from '../reducers/labyrinth'

const Container = styled.div`
    width: 550px;
    height: 450px;
    margin: calc(50% - 220px) auto;
    padding: 35px;
    background-color: #205A9E;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: 1s ease-in;
`

const Title = styled.h1`
    font-size: 32px;
    color: white;
    margin-bottom: 10px;
`

const Description = styled.p`
    font-size: 22px;
    color: white;
`

export const LabyrinthCard = ({ title, description, actions }) => {
  const dispatch = useDispatch()

  console.log('description:', description)
  console.log('actions.length', actions.length, 'actions', actions)
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {actions.map((item) => (
        <div className="game-actions" key={item.description}>
          <p>{item.type}</p>
          <p>{item.direction}</p>
          <p>{item.description}</p>
          <button type="button" onClick={() => dispatch(generateActionData(item.type, item.direction))}>Go this way</button>
        </div>))}
    </Container>
  )
}