import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { createPlayer } from '../reducers/game'

const Button = styled.button`

`
const DirectionButton = styled.button`

`

export const StartButton = () => {
    const dispatch = useDispatch()
  
    const start = useSelector((store) => store.game.game)
  
  const onStartGame = () => {
    dispatch(createPlayer())
  }
  
  
    return (
      <>
      <Button onClick={onStartGame}>Start game</Button>
      <div>{start.description}</div>
        {start.actions?.map((direction) => {
        return ( 
            <> 
            <div>{direction.description}</div>
            <DirectionButton>{direction.direction}</DirectionButton>
            </>
        
        )
      })}
      </>
    )
  }