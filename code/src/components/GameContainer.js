import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { StartButton } from './StartButton'
import { RoomDescription } from './RoomDescription'
import { ActionList } from './ActionList'
import { Loader } from './Loader'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  margin: 0px;
`

const ContentContainer = styled.div`
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 90vw;
  }  
  @media (min-width: 1025px) {
    width: 50vw;
  }  
`

export const GameContainer = () => {

  const started = useSelector(store => store.game.gameStarted)
  const isLoading = useSelector(store => store.game.isLoading)
  const actions = useSelector(store => store.game.gameState.actions)

  return (
    <Container>
      {!started && <StartButton />}
      {started &&
        <>
          {!isLoading &&
            <ContentContainer>
              <RoomDescription />
              <ActionList />
            </ContentContainer>
          }
          {actions.length === 0 && <StartButton />}
          {isLoading && <Loader />}
        </>
      }
    </Container>
  )
}
