import React from 'react'
import styled from "styled-components/macro"

import myImage from '../assets/bowie.png'

const Img = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin: 0.4em 0.4em 0 0.6em;

  @media (min-width: 768px) {
    width: 7.5em;
    height: 7.5em;
    margin: 0.4em 0.4em 0.6em 0.6em;
  }
`

export const Thumbnail = () => {
  return (
    <Img alt={`Bowie as Jareth`} src={myImage} />
  )
}