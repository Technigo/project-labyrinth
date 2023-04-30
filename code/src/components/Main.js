/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Location } from './Location'
import { Start } from './Start'
import StartImg from '../images/StartPage.jpg'
import LightImg from '../images/light.jpg'
import FirstImg from '../images/entrance.jpg'
import ColorImg from '../images/color.jpg'
import BridgeImg from '../images/bridge.png'
import EndImg from '../images/end.jpg'
import WorkshopImg from '../images/workshop.jpg'
import library from '../images/library.jpg'
import beachWaves from '../sounds/beach.mp3'
import bridge from '../sounds/bridge.mp3'
import cave from '../sounds/cave.mp3'
import clock from '../sounds/clock.mp3'
import gear from '../sounds/gear.mp3'
import papers from '../sounds/papers.mp3'
import pirate from '../sounds/pirate.mp3'
import { Button } from './Buttons'

export const Main = () => {
  const username = useSelector((store) => store.maze.username)
  const currentLocation = useSelector((store) => store.maze.coordinates)

  // const [audio, setAudio] = useState(null)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Define the audio sources for different locations
    const audioSources = {
      '0,0': beachWaves,
      '0,1': clock,
      '0,2': gear,
      '0,3': papers,
      '1,0': bridge,
      '1,1': cave,
      '1,3': pirate
    }

    const newAudio = new Audio(audioSources[currentLocation])
    newAudio.loop = true

    if (!isMuted) {
      newAudio.play()
    }
    // Pause the previous audio by referring to the current audio element
    if (audioRef.current) {
      audioRef.current.pause()
    }
    audioRef.current = newAudio

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [currentLocation, isMuted])

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
      {username === '' ? (<Start />) : (<Location />)}
      <MuteButton onClick={() => setIsMuted(!isMuted)}>{isMuted ? '🔇' : '🔈 '}</MuteButton>
    </MainSection>
  )
}

const MainSection = styled.main`
display: flex;
justify-content: center;
height: 100vh;
background-image: ${(props) => `url(${props.backgroundImage})`};
background-size: cover;
background-position: center;
`

const MuteButton = styled(Button)`
animation: none;
position: absolute;
right: 2px;
font-size: 20px;
padding: 0px;
margin: 0px;
`