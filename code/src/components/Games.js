import React from 'react' 
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import Header from './Header'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import Loader from './Loader'

const Games = () => {
  const userName = useSelector(store => store.games.username)
  const error = useSelector(store => store.games.error)
  const loading = useSelector(store => store.games.loading)

  return (
    <MainWrapper>
      <GameWrapper>
      {error && `Ups, something went wrong, reason : ${error}`}
      {loading && <Loader />}
      {userName &&  <Header />}
      {userName
          ? <GameScreen />
          : <StartScreen /> 
      }
      </GameWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  margin: 10px;
  @media (min-width: 768px) {
    margin: 50px;
  }
`
const GameWrapper = styled.div`
  @media (min-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }
`
export default Games