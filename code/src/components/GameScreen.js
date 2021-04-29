import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {continueLabyrinth} from '../reducers/labyrinth'

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  color: white;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding: 20px;
  text-align: center;
  width: 75%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  -webkit-border-radius: 12px;

  @media (min-width: 768px) {
    width: 600px;
    padding: 40px;
  }
`;

const TextContent = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SingleButtonContainer = styled.div`
  width: 50%;
  margin: 5px;
  padding: 5px;
  margin-top: 10px;
  border: 1px solid white;
  @media (min-width: 768px) {
    font-size: 40%;
  }
`

const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 3px;
  color: black;
  font-weight: 500px;
  margin: 10px 0 0 10px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500px;
  margin: 0;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const SmallerText = styled.p`
  font-size: 12px;
  font-weight: 300;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

const GameScreen = () => {
  const response = useSelector(store => store.labyrinth.response)
  const actions = useSelector(store => store.labyrinth.response.actions)

  const dispatch = useDispatch()

  const onButtonClick = (type, direction) => {
    dispatch(continueLabyrinth(type, direction))
  }

  return (
    <Container>
      <TextContent>
        <SmallerText>Coordinates: {response.coordinates}</SmallerText>
        <Title>{response.description}</Title>
      </TextContent>
      <ButtonContainer>
      {actions.map((action) => (
          <SingleButtonContainer key={action.description}>
          <Button onClick={() => onButtonClick(action.type, action.direction)}>Move {action.direction}</Button> 
          <SmallerText>{action.description}</SmallerText>
        </SingleButtonContainer>
      ))}
      </ButtonContainer>
    </Container>
  )
}

export default GameScreen;
