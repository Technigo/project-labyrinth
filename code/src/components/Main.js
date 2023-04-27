import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StartScreen from './StartScreen'
import { GameBoard } from './GameBoard'
import { Loading } from './Loading'

export const Main = () => {
  const { coordinates } = useSelector((store) => store.game.currentLocation)
  const isLoading = useSelector((store) => store.ui.isLoading)

  const LoadingWrapper = styled.div`
  position: absolute; 
  top:0; 
  left: 0; 
  z-index: 5;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  pointer-events: none;
`

  return (
    <div>
      <LoadingWrapper>
        {isLoading && <Loading />}
      </LoadingWrapper>
      {coordinates
        ? <GameBoard coordinates={coordinates} />
        : <StartScreen />}
    </div>
  )
}

