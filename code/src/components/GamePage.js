/* eslint-disable max-len */
import React from 'react';
import { fetchGameStep } from 'reducers/maingame';
import { useSelector, useDispatch } from 'react-redux';
import { CardContainer, StyledButton } from 'GlobalStyles';
import styled from 'styled-components';
import { LoadingPage } from './LoadingPage';

export const GamePage = () => {
  const gameProps = useSelector((store) => store.maingame.gameProps)
  const username = useSelector((store) => store.maingame.username);
  const actions = useSelector((store) => store.maingame.gameProps.actions);
  const isLoading = useSelector((store) => store.loading.isLoading);
  const dispatch = useDispatch()

  if (isLoading) {
    return <LoadingPage />
  } else {
    return (
      <CardContainerGame>
        <Description>&quot;{gameProps.description}&quot;</Description>
        <ChooseUser>Choose wisely, {username}...</ChooseUser>
        <Choices>
          {actions.map((action) => {
            return (
              <SingleChoice key={action.direction}>
                <DescriptionText>{action.description}</DescriptionText>
                <StyledButtonGame type="submit" onClick={() => dispatch(fetchGameStep(action.type, action.direction))}>Go {action.direction}</StyledButtonGame>
              </SingleChoice>
            )
          })}
        </Choices>
      </CardContainerGame>

    )
  }
}

const CardContainerGame = styled(CardContainer)``

const Choices = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media (min-width: 1027px) {
    flex-direction: row;
    margin-top: 15px;
  }
`

const Description = styled.p`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  width: 80%;

  @media (min-width: 668px) {
  font-size: 23px;
  }

  @media (min-width: 1000) {
  font-size: 25px;
  }
`

const ChooseUser = styled.p`
  font-style: italic;
  font-size: 30px;
  font-family: 'Caveat', cursive;
  margin:10px;
  font-weight: 600;
  margin-bottom: 30px;

  @media (min-width: 668) {
  font-size: 40px;
  }
`
const DescriptionText = styled.p`
  font-family: 'Montserrat', sans-serif;

`

const SingleChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 0px 7px 0px #888888;
  margin: 10px;
  width: 65vw;
  
  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-width:  30vw;
    max-height: 50vh;
  }

  @media (min-width: 900px) {
    width:  30vw;
    height: 35vh;
  }

  @media (min-width: 1000) {
    width:  20vw;
    height: 20vh;
  }
`

const StyledButtonGame = styled(StyledButton)`
  width: 100px;
  margin-top: 10px;
`

/*
The button will dispatch the second fetch thunk which will do the coming fetches with the next set
of instructions to show the user: for this fetch we need to send an object including the username,
type="move" and the direction the user chose so we send that data as a prop to the reducer
*/