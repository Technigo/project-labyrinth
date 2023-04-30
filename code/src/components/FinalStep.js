import React from 'react'
import styled from 'styled-components/macro'
import Lottie from 'lottie-react'
import ship from '../lotties/ship.json'
import { Button } from './Buttons'

export const FinalStep = () => {
  const onClickRestart = () => {
    window.location.reload()
  }

  return (
    <div>
      <LottieDiv>
        <Lottie style={{ width: '300px', margin: 'auto' }} animationData={ship} />
      </LottieDiv>
      <RestartButton type="button" onClick={() => onClickRestart()}>Restart</RestartButton>
    </div>
  )
}

const LottieDiv = styled.div`
display: flex;
align-self: center;
margin-top: -120px;

@media (min-width: 768px) {
  margin-top: -50px;
}
`

const RestartButton = styled(Button)`
color: goldenrod;
position: absolute;
bottom: 5px;
right:5px;
`