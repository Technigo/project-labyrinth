import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import { Loading } from './Loading'

import styled from 'styled-components'

import {
  imgURL_start, 
  imgURL_1_1, 
  imgURL_1_3,
  imgURL_1_0,
  imgURL_0_3,
  imgURL_0_2,
  imgURL_0_1,
  imgURL_0_0
} from '../images/images'

const Main = styled.main`
  display: flex;
  color: white;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: ${(props) =>
    props.coordinates === '1,3'
      ? imgURL_1_3
      : props.coordinates === '1,1'
      ? imgURL_1_1
      : props.coordinates === '1,0'
      ? imgURL_1_0
      : props.coordinates === '0,3'
      ? imgURL_0_3
      : props.coordinates === '0,2'
      ? imgURL_0_2
      : props.coordinates === '0,1'
      ? imgURL_0_1
      : props.coordinates === '0,0'
      ? imgURL_0_0
      : imgURL_start};
  background-size: cover;
`

const Labyrinth = () => {
  const response = useSelector(store => store.labyrinth.response)
  const coordinates = useSelector(store => store.labyrinth.response.coordinates)

  const isEmpty = (obj) => {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false
      }
    }
    return JSON.stringify(obj) === JSON.stringify({})
  }

  return (
    <Main coordinates={coordinates}>
      {isEmpty(response)
        ? <StartScreen /> 
        : <GameScreen />
      }
      <Loading />
    </Main>
  )
}

export default Labyrinth

//Old code to implement different videos

    /* <Video autoPlay="autoplay" loop="loop" muted>
      <source src={
        coordinates === '1,3'
        ? './images/warmer.mp4'
        : coordinates === '1,1'
        ? './images/walkingtowardslight.mp4'
        : coordinates === '1,0'
        ? './images/warmer.mp4'
        : coordinates === '0,3'
        ? './images/wallchangingcolor.mp4'
        : coordinates === '0,2'
        ? './images/wallchangingcolor.mp4'
        : coordinates === '0,1'
        ? './images/mechanical.mp4'
        : coordinates === '0,0'
        ? './images/enteringcave.mp4'
        : './images/startvideo.mp4'

      } type="video/mp4" />
      Your browser does not support the video tag.
    </Video>*/


    /* const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
` 

*/