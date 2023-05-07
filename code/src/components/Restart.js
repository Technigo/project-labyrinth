/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { labyrinth } from 'reducers/labyrinth'
import { RestartBtn, RestartWrapper } from './StartScreenCSS'

export const Restart = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.labyrinth.isLoading)
  const onRestartButton = () => {
    dispatch(labyrinth.actions.setUsername(''))
    dispatch(labyrinth.actions.restart())
  }

  return (
    <RestartWrapper>
      {!isLoading && <RestartBtn type="button" onClick={onRestartButton} />}
    </RestartWrapper>
  )
}