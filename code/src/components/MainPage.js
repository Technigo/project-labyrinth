import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Loader } from './Loader'
import { StartPage } from './StartPage'
import { GameBoard } from './GameBoard'
import { Header } from './Header'
import { Footer } from './Footer'

export const MainPage = () => {
  const isUserNameProvided = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.game.loading)

  return (
    <MainPageContainer>
      <Header />
      {isLoading ? <Loader /> : (<> {isUserNameProvided === '' ? <StartPage /> : <GameBoard />} </>)}
      <Footer />
    </MainPageContainer>
  )
}

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 30px;
    width: 400px;
    margin-bottom: 20px;
    color: rgb(197, 91, 95);
`