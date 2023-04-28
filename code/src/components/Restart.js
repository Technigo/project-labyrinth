/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { useDispatch } from 'react-redux'
import { labyrinth } from 'reducers/labyrinth'
import { RestartBtn, RestartWrapper } from './GameCSS'

export const Restart = () => {
  const dispatch = useDispatch()
  const onRestartButton = () => {
    dispatch(labyrinth.actions.restart())
  }

  return (
    <RestartWrapper>
      <RestartBtn type="button" onClick={onRestartButton} />
    </RestartWrapper>
  )
}