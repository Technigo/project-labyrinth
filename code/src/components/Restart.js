/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { useDispatch } from 'react-redux'
import { labyrinth } from 'reducers/labyrinth'
import styled from 'styled-components'

export const Restart = () => {
  const dispatch = useDispatch()
  const onRestartButton = () => {
    dispatch(labyrinth.actions.restart())
  }

  return (
    <RestartWrapper>
      <button type="button" onClick={onRestartButton}>RESTART</button>
    </RestartWrapper>
  )
}

const RestartWrapper = styled.div`
 `