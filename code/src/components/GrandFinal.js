import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import { StartText } from './Start'
import { Button } from './Buttons'
import ship from '../lotties/ship.json'

export const GrandFinal = () => {
  const onClickRestart = () => {
    window.location.reload()
  }
  return (
    <div>
      <EndText>
        You step out on a dock by the sea.
        The big machine is swaying majestic on the small waves
        and you know that you have reached the meaning of the journey.
        You board and a hat is put on your head.
        As the ship sets sail, you look back at the temple,
        feeling grateful for the guidance that led you here.
        You turn your gaze back to the horizon,
        open the bottle from your chest pocket and take a sip... Yohoho!
      </EndText>
      <LottieDiv>
        <Lottie style={{ width: '300px', margin: 'auto' }} animationData={ship} />
      </LottieDiv>
      <RestartButton type="button" onClick={() => onClickRestart()}>Restart</RestartButton>
    </div>
  )
}

const EndText = styled(StartText)`
padding-top: 20px;
font-size: 18px;
color: whitesmoke;
text-shadow: 1px 1px black;

@media (min-width: 768px) {
  font-size: 22px;
}
`
const LottieDiv = styled.div`
display: flex;
align-self: center;

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