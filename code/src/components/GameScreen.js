import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import labyrinth, {continueLabyrinth} from '../reducers/labyrinth'

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  color: black;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding: 40px;
  text-align: center;
  background-color: white;
  width: 500px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
`;

const TextContent = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SingleButtonContainer = styled.div`
  width: 50%;
`

const Button = styled.button`
  border: 1px solid black;
  background-color: inherit;
  color: #6203ee;
  font-weight: 500px;
  margin: 40px 0 0 10px;
  padding: 5px;

  &:hover {
    background-color: #fafafa;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500px;
  margin: 0;
  margin-bottom: 10px;
`;

const SubHeading = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
`;

const SmallerText = styled.p`
  font-size: 12px;
  font-weight: 300;
`

const GameScreen = () => {
  const response = useSelector(store => store.labyrinth.response)
  const actions = useSelector(store => store.labyrinth.response.actions)
  const username = useSelector(store => store.labyrinth.username)

  const dispatch = useDispatch()

  const onButtonClick = (type, direction) => {
    dispatch(continueLabyrinth(type, direction))
  }

  return (
    <Container>
      <TextContent>
       <Title>{response.description}</Title>
      <SmallerText>Coordinates: {response.coordinates}</SmallerText>
      </TextContent>
      <ButtonContainer>
      {actions.map((action) => (
          <SingleButtonContainer key={action.description}>
          <Button onClick={() => onButtonClick(action.type, action.direction)}>{action.type} {action.direction}</Button> 
          <SmallerText>{action.description}</SmallerText>
        </SingleButtonContainer>
      ))}
      </ButtonContainer>
    </Container>
  )
}

export default GameScreen;
