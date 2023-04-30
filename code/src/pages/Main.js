import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StartingPage from './StartingPage'
import LoadingPage from './LoadingPage'
import GamePage from './GamePage'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: blue dotted 2px; */
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`

const Main = () => {
  const isUserNameSubmitted = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.ui.loading)

  return (
    <MainContainer>
      {isLoading ? <LoadingPage /> : (<> {isUserNameSubmitted === '' ? <StartingPage /> : <GamePage />}  </>)}
    </MainContainer>
  );
}

export default Main;