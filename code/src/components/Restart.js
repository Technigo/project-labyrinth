/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { useDispatch } from 'react-redux'
import { labyrinth } from 'reducers/labyrinth'
import { Btn, RestartWrapper } from './StartScreenCSS'

export const Restart = () => {
  const dispatch = useDispatch()
  const onRestartButton = () => {
    dispatch(labyrinth.actions.restart())
  }

  return (
    <RestartWrapper>
      <Btn type="button" onClick={onRestartButton}>RESTART</Btn>
    </RestartWrapper>
  )
}