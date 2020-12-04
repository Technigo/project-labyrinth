import React from 'react'
import styled from "styled-components/macro"

import myImage from '../assets/bowie.png'

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 15px 15px 0 30px;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    margin: 15px 15px 30px 30px;
  }
`

export const Thumbnail = () => {
  return (
    <Img alt={`Bowie as Jareth`} src={myImage} />
  )

}