import React from 'react'
import styled from "styled-components/macro"

import myImage from '../media/skull_head.png'


const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 15px 15px 0 30px;
`

export const Thumbnail = () => {

  return (
    <Img alt={`alt`} src={myImage}/>
  )

}