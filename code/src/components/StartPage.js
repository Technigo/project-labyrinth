import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Loader } from './Loader'
import { UserNameInput } from './UserNameInput'
import { GameBoard } from './GameBoard'

// I'm thinking that maybe this should be called Main or something because we put either
// UserNameInput (which maybe actually should be the component called StartPage??) here or GameBoard
export const StartPage = () => {
  const isUserNameProvided = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.game.loading)

  return (
    <MainPageContainer>
      {isLoading ? <Loader /> : (<> {isUserNameProvided === '' ? <UserNameInput /> : <GameBoard />} </>)}
    </MainPageContainer>
  )
}

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
    margin-bottom: 20px;
    color: rgb(197, 91, 95);
`
