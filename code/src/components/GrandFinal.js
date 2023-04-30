import React from 'react'
import styled from 'styled-components'
import { StartText } from './Start'

export const GrandFinal = () => {
  return (
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
  )
}

const EndText = styled(StartText)`
font-size: 18px;
color: whitesmoke;
text-shadow: 1px 1px black;

@media (min-width: 768px) {
  font-size: 22px;
}
`