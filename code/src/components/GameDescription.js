import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { continueGame } from '../reducers/game'


const DirectionButton = styled.button`

`

export const GameDescription = ({inputValue}) => {
  const start = useSelector((store) => store.game.game)
  const dispatch = useDispatch()

  return (
    <>
     <div>{start.description}</div>
        {start.actions?.map((direction, index) => {
        return ( 
            <div key={index}> 
            <div>{direction.description}</div>
            <div>{direction.coordinates}</div>
            <DirectionButton onClick={() => dispatch(continueGame(direction.direction, inputValue))}>{direction.direction}</DirectionButton>
            </div>
        )
    })}
    </>
  )
}