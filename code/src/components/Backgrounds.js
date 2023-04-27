import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import StartImg from '../images/StartPage.jpg'
import plank from '../images/plank.jpg'
import light from '../images/light.jpg'
import bridge from '../images/bridge.png'
import ship from '../images/ship.jpg'
import workshop from '../images/workshop.jpg'
import library from '../images/library.jpg'

const StyledBackground = styled.div`
background-image: ${(props) => `url(${props.backgroundImage})`};
background-size: cover;
background-position: center;
`

export const Backgrounds = () => {
  const currentLocation = useSelector((store) => store.maze.coordinates)

  let backgroundImage;
  switch (currentLocation) {
    case '': return '../images/StartPage.jpg'
    case '0,0': backgroundImage = StartImg;
      break;
    case '0,1': backgroundImage = bridge;
      break;
    case '0,2': backgroundImage = library;
      break;
    case '0,3': backgroundImage = light;
      break;
    case '1,0': backgroundImage = workshop;
      break;
    case '1,1': backgroundImage = plank;
      break;
    case '1,3': backgroundImage = ship;
      break;
    default: backgroundImage = ship;
  }

  return (
    <StyledBackground backgroundImage={backgroundImage} />
  )
}