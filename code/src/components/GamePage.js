/* eslint-disable max-len */
import React from 'react';
import { fetchGameStep } from 'reducers/maingame';
import { useSelector, useDispatch } from 'react-redux';
import { CardContainer, StyledButton } from 'GlobalStyles';
// import { LastPage } from './LastPage';
import styled from 'styled-components';
import { LoadingPage } from './LoadingPage';
// import Background from '../pictures/path.jpg'

export const GamePage = () => {
  const gameProps = useSelector((store) => store.maingame.gameProps)
  const username = useSelector((store) => store.maingame.username);
  const actions = useSelector((store) => store.maingame.gameProps.actions);
  const isLoading = useSelector((store) => store.loading.isLoading);
  // const stepHistory = useSelector((state) => state.maingame.history);
  const dispatch = useDispatch()
  /* const onStepHistoryBack = () => {
    dispatch(maingame.actions.setGoBack());
  };
  */

  if (isLoading) {
    return <LoadingPage />
  } else {
    return (

      <CardContainerGame>

        <Description>{gameProps.description}</Description>
        <Choices>
          <ChooseUser>Choose wisely, {username}...</ChooseUser>
          {actions.map((action) => {
            return (
              <>
                <p>{action.description}</p>
                <StyledButton type="submit" onClick={() => dispatch(fetchGameStep(action.type, action.direction))}>Go {action.direction}</StyledButton>

              </>

            )
          })}
        </Choices>

      </CardContainerGame>

    )
  }
}

const CardContainerGame = styled(CardContainer)`

    border-radius: 6px;
    box-shadow: 0px 0px 7px 0px #888888;`

const Choices = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Description = styled.p`
font-size: 20px;
`

const ChooseUser = styled.p`
  font-style: italic;
  font-size: 20px;
`

/*
The button will dispatch the second fetch thunk which will do the coming fetches with the next set
of instructions to show the user: for this fetch we need to send an object including the username,
type="move" and the direction the user chose so we send that data as a prop to the reducer

*/
