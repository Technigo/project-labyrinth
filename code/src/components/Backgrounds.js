import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import StartImg from '../images/StartPage.jpg'
import plank from '../images/plank.jpg'
// import light from '../images/light.jpg'
import bridge from '../images/bridge.png'
// import ship from '../images/ship.jpg'
// import workshop from '../images/workshop.jpg'
// import library from '../images/library.jpg'

const StyledBackground = styled.div`
background: url(${((props) => props.backgroundSwitcher)});
background-size: cover;
background-position: center;
`

export const Backgrounds = () => {
  const currentLocation = useSelector((store) => store.maze)

  const backgroundSwitcher = () => {
    switch (currentLocation.coordinates) {
      case '': return '../images/StartPage.jpg'
      case '0,0': return StartImg;
      case '0,1': return bridge;
      case '0,2': return '../images/library.jpg'
      case '0,3': return '../images/light.jpg';
      case '1,0': return '../images/light.jpg';
      case '1,1': return plank;
      case '1,3': return '../images/light.jpg';
      default: return StartImg;
    }
  }
  return (
    <div>
      <StyledBackground background={backgroundSwitcher()} />
      <img src="../images/StartPage.jpg" alt="" />
    </div>
  )
}