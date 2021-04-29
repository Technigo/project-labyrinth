import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Content = () => {
  const actions = useSelector(store => store.labyrinth.actions)

  const error = useSelector(store => store.labyrinth.error)
  const loading = useSelector(store => store.labyrinth.loading)

  return (
    <Main>
      {error && <p>Something went wrong, reason: {error}</p>}
      {loading && <h1>LOADING...</h1>}
      {actions.length < 1 ? <StartScreen /> : <GameScreen />}
    </Main>
  )
}

export default Content