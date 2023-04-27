import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Location from './Location'
import { Start } from './Start'
import StartImg from '../images/StartPage.jpg'
import light from '../images/light.jpg'
import bridge from '../images/bridge.png'
import ship from '../images/ship.jpg'
import workshop from '../images/workshop.jpg'
import library from '../images/library.jpg'

const Main = () => {
  const username = useSelector((store) => store.maze.username)
  const currentLocation = useSelector((store) => store.maze.coordinates)

  let backgroundImage;
  switch (currentLocation) {
    case '0,0': backgroundImage = StartImg;
      break;
    case '0,1': backgroundImage = workshop;
      break;
    case '0,2': backgroundImage = library;
      break;
    case '0,3': backgroundImage = light;
      break;
    case '1,0': backgroundImage = bridge;
      break;
    case '1,1': backgroundImage = light;
      break;
    case '1,3': backgroundImage = ship;
      break;
    default: backgroundImage = StartImg;
  }
  return (
    <MainSection backgroundImage={backgroundImage}>
      {username === '' ? <Start /> : <Location />}
    </MainSection>
  )
}

export default Main

const MainSection = styled.main`
display: flex;
justify-content: center;
border: pink solid 4px;
height: 100vh;
background-image: ${(props) => `url(${props.backgroundImage})`};
background-size: cover;
background-position: center;
`