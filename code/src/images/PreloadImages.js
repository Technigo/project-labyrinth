import React from 'react'
import styled from 'styled-components'
import One from './One.jpg'
import Start from './start.jpg'
import Zero from './Zero.jpg'
import ZeroOne from './ZeroOne.jpg'
import ZeroTwo from './ZeroTwo.jpg'
import ZeroThree from './ZeroThree.jpg'
import OneOne from './OneOne.jpg'
import OneThree from './OneThree.jpg'

const PreloadImages = () => {
  return (
    <Preload>
      <img src={Start} alt="" />
      <img src={One} alt="" />
      <img src={Zero} alt="" />
      <img src={ZeroOne} alt="" />
      <img src={ZeroTwo} alt="" />
      <img src={ZeroThree} alt="" />
      <img src={OneOne} alt="" />
      <img src={OneThree} alt="" />
    </Preload>

  )
}
export default PreloadImages;

const Preload = styled.div`
  display: none;
`