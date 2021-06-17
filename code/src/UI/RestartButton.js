import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'

import maze from '../reducers/maze'

const RestartButton = ({ text }) => {
  const dispatch = useDispatch()

  const onButtonClick = () => {
    dispatch(maze.actions.restartGame())
  }

  return (
    <BackButton
      onClick={() => onButtonClick()}
      type='button'
      className='nes-btn'>
        {text}
    </BackButton>
  )
}

export default RestartButton

const BackButton = styled.button`
  font-family: "Press Start 2P", cursive;
  margin-top: 45px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`
