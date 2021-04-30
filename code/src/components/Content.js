import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Heading = styled.h1`
  color: rgb(246,226,189);
`

const CustomButton = styled.button`     //add hover effect on all buttons
  border-radius: 6px;
  border: 2px solid #3b2e36;
  background-color: rgb(82,88,13, 0.7);
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  font-family: 'New Tegomin', serif;

  @media (min-width: 768px) {
    font-size: 22px;
    padding: 5px 15px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
`

const Content = () => {
  const actions = useSelector(store => store.labyrinth.actions)

  const error = useSelector(store => store.labyrinth.error)
  const loading = useSelector(store => store.labyrinth.loading)

  const onRestartButton = () => {
    window.location.reload()
  }

  return (
    <Main>
      {error 
        ? (<>
            <Heading>Something went wrong, reason: {error}</Heading>
            <CustomButton onClick={onRestartButton} >
              RESTART
            </CustomButton>
          </>) 
        : (<>
            {loading && <Heading>LOADING...</Heading>}
            {actions.length < 1 ? <StartScreen /> : <GameScreen />}
          </>)
      }
    </Main>
  )
}

export default Content