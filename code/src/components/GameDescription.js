import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { continueGame } from '../reducers/game'

const StartDescription = styled.div`
  text-align: center;
  margin-bottom: 30px; 
  padding: 0 30px 0 30px;

  @media (min-width: 667px) {
        font-size: 20px;
    }
`
const NextDescription = styled.div`
  text-align: center;
  padding: 0 30px 0 30px;

  @media (min-width: 667px) {
        font-size: 20px;
    }
`

const DirectionButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 8px;
  border-radius: 10px;
  bordeR: none;
  background-color: #dbcac7;
`

export const GameDescription = ({inputValue}) => {
  const start = useSelector((store) => store.game.game)
  const dispatch = useDispatch()

  return (
    <>
     <StartDescription>{start.description}</StartDescription>
        {start.actions?.map((direction, index) => {
        return ( 
            <NextDescription key={index}> 
            <div>{direction.description}</div>
            <div>{direction.coordinates}</div>
            <DirectionButton onClick={() => dispatch(continueGame(direction.direction, inputValue))}>{direction.direction}</DirectionButton>
            </NextDescription>
        )
    })}
    </>
  )
}