import React from 'react'
import styled from 'styled-components'
import One from '../images/One.jpg'
import Start from '../images/start.jpg'
import Zero from '../images/Zero.jpg'
import ZeroOne from '../images/ZeroOne.jpg'
import ZeroTwo from '../images/ZeroTwo.jpg'
import ZeroThree from '../images/ZeroThree.jpg'
import OneOne from '../images/OneOne.jpg'
import OneThree from '../images/OneThree.jpg'

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