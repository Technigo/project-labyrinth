import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Location from './Location'
import { Start } from './Start'
import StartImg from '../images/StartPage.jpg'
import LightImg from '../images/light.jpg'
import FirstImg from '../images/entrance.jpg'
import ColorImg from '../images/color.jpg'
import BridgeImg from '../images/bridge.png'
import EndImg from '../images/end.jpg'
import WorkshopImg from '../images/workshop.jpg'
import library from '../images/library.jpg'

const Main = () => {
  const username = useSelector((store) => store.maze.username)
  const currentLocation = useSelector((store) => store.maze.coordinates)

  let backgroundImage;
  switch (currentLocation) {
    case '0,0': backgroundImage = FirstImg;
      break;
    case '0,1': backgroundImage = WorkshopImg;
      break;
    case '0,2': backgroundImage = ColorImg;
      break;
    case '0,3': backgroundImage = library;
      break;
    case '1,0': backgroundImage = BridgeImg;
      break;
    case '1,1': backgroundImage = LightImg;
      break;
    case '1,3': backgroundImage = EndImg;
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
height: 100vh;
background-image: ${(props) => `url(${props.backgroundImage})`};
background-size: cover;
background-position: center;
`