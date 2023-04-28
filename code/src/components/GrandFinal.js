import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import { StartText } from './Start'
import ship from '../lotties/ship.json'

export const GrandFinal = () => {
  return (
    <EndSection>
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
      <Lottie style={{ width: '200px', margin: 'auto' }} animationData={ship} loop />
    </EndSection>
  )
}

const EndSection = styled.div`
display:flex;
width: 500px;
`
const EndText = styled(StartText)`
`