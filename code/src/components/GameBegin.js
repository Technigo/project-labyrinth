import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getDescription } from 'reducers/gameInfo';
import { Buttons } from 'components/Buttons';
import { gameDetails } from 'reducers/gameDetails';
import { StyledButton } from 'lib/StyledButton'

const Text = styled.p`
  font-weight: bold;
`


export const GameBegin = () => {
  const dispatch = useDispatch();

  const gameData = useSelector(store => store.gameDetails.gameDetails)
  const gameOn = useSelector(store => store.gameDetails.gameStarted);
  const gameOff = useSelector(store => store.gameDetails.gameFinished);
  const historyContainer = useSelector(store => store.gameDetails.history);
  const isLoading = useSelector(store => store.gameDetails.isLoading)

  //when this function fires up on button click it generates a random username which becomes a string 
  //in case the API  doesn't accept numbers as usernames
  //then it dispatches username to the store
  // it fires up the getDesctiption thunk
  //dispatches the startGame action 
  const onGameBegin = () => {
    const userName = Math.random().toString();
    dispatch(gameDetails.actions.setUserName(userName));
    dispatch(getDescription(userName));
    dispatch(gameDetails.actions.startGame());
  }

  //this function fires up on click and dispatches historyGoBack action
  const handleHistoryBack = () => {
    dispatch(gameDetails.actions.historyGoBack());
  }

  if (isLoading) return "Loading..."

  //we ask if gameOn which is gameStarted is not equal to false, in other words equals to true, then we return Welcome and Play button
  //if it equals to false we return the direction Buttons and Go Back(in case the game is not finished gameOff = false)
  //if the game is finished gameOff = true and we offer to Play it again by pressing a button

  return (
    <div>
      {!gameOn ? (
        <>
          <div> Welcome to the game!  </div>
          <StyledButton onClick={onGameBegin}>> play</StyledButton>
        </>
      ) : (
          <>
            <Text>{gameData.description}</Text>
            {gameData.description && <Buttons />}
            {!gameOff && <StyledButton onClick={handleHistoryBack}
              disabled={historyContainer === 1} style={{ color: 'red' }}>> go back</StyledButton>}
          </>
        )
      }
      {gameOff && <StyledButton onClick={() => window.location.reload()}>> one more time</StyledButton>}
    </div>
  )
}
