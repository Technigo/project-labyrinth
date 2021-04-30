import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import game from '../reducers/game'



const Button = styled.button`
    margin-top: 30px;
    background-color:#3e883e;
    padding:10px;
    color: white;
    border-radius: 5px;
    border: none;
`

const RestartButton = () => {
  const dispatch = useDispatch()
  const onStartAgain = () => {
    dispatch(game.actions.setDirection(null))
  }

  return (
      <Button
        onClick={onStartAgain}
        type="button">
        Restart 
      </Button>
  )
}

export default RestartButton