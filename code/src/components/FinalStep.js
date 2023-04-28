import React from 'react'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import Lottie from 'lottie-react'
// import { maze } from 'reducers/maze'
import ship from '../lotties/ship.json'
import { Button } from './Buttons'

export const FinalStep = () => {
  // const dispatch = useDispatch()

  const onClickRestart = () => {
    window.location.reload()
  }

  return (
    <div>
      <Lottie style={{ width: '400px', margin: 'auto' }} animationData={ship} />
      <RestartButton type="button" onClick={() => onClickRestart()}>Restart</RestartButton>
    </div>
  )
}

const RestartButton = styled(Button)`
color: goldenrod;
position: absolute;
bottom: 5px;
right:5px;
`