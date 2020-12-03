import React from 'react'
import styled from "styled-components/macro"

import myImage from '../assets/skull_head.png'

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 15px 15px 0 30px;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 15px 15px 30px 30px;
  }
`

export const Thumbnail = () => {
  return (
    <Img alt={`Illustration of skull`} src={myImage} />
  )

}