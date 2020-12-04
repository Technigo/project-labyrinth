import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { StartButton } from './StartButton'
import { RoomDescription } from './RoomDescription'
import { ActionList } from './ActionList'
import { Loader } from './Loader'

const Container = styled.div`
  color: white;
  width: 100vw;
  height: 100%;
  margin: 0px;
`

export const GameContainer = () => {

  const started = useSelector(store => store.game.gameStarted)

  return (
    <Container>
      {!started && <StartButton />}
      {started &&
        <>
          <RoomDescription />
          <ActionList />
          <Loader />
        </>
      }
    </Container>
  )
}
