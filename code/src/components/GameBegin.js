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

  const onGameBegin = () => {
    const userName = Math.random().toString();
    dispatch(gameDetails.actions.setUserName(userName));
    dispatch(getDescription(userName));
    dispatch(gameDetails.actions.startGame());
  }

  const handleHistoryBack = () => {
    dispatch(gameDetails.actions.historyGoBack());
  }

  if (isLoading) return "Loading..."

  return (
    <div>
      {!gameOn ? (
        <>
          <div> Welcome to the game!  </div>
          <StyledButton onClick={onGameBegin}>{">"} play</StyledButton>
        </>
      ) : (
          <>
            <Text>{gameData.description}</Text>
            {gameData.description && <Buttons />}
            {!gameOff && <StyledButton onClick={handleHistoryBack}
              disabled={historyContainer === 1} style={{ color: 'red' }}>{"<"} go back</StyledButton>}
          </>
        )
      }
      {gameOff && <StyledButton onClick={() => window.location.reload()}>{">"} one more time</StyledButton>}
    </div>
  )
}
