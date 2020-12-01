import React from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { createPlayer } from '../reducers/game'

const StartButton = styled.button`

`

export const GameList = () => {
  const dispatch = useDispatch()

  return (
    <StartButton onClick={c}>Start game</StartButton>
  )
}