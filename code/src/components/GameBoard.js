import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Loading from './Loading'

import bigroom from '../assets/bigroom.jpg'
import exit from '../assets/exit.jpg'
import elevator from '../assets/elevator.jpg'
import hallway from '../assets/hallway.jpg'
import metal from '../assets/metal.jpg'
import greenhouse from '../assets/greenhouse.jpg'
import hallway2 from '../assets/hallway2.jpg'
import lader from '../assets/lader.jpg'

import StartingPage from './StartingPage'
import { Labyrinth } from './Labyrinth'

const GameBoard = () => {
  const { coordinates } = useSelector((store) => store.steps.currentStep)
  const isLoading = useSelector((store) => store.ui.isLoading)
  const setBackImage = () => {
    let img = `url(${bigroom})`
    switch (coordinates) {
      case '0,0':
        img = `url(${elevator})`
        break
      case '1,0':
        img = `url(${hallway})`
        break
      case '1,1':
        img = `url(${greenhouse})`
        break
      case '0,1':
        img = `url(${metal})`
        break
      case '0,2':
        img = `url(${lader})`
        break
      case '0,3':
        img = `url(${hallway2})`
        break
      case '1,3':
        img = `url(${exit})`
        break
      default:
        img = `url(${bigroom})`
    }
    return img
  }

  return (
    <Container style={{ background: setBackImage(coordinates) }}>
      <GameContainer>
        {coordinates ? <Labyrinth /> : <StartingPage />}
        {isLoading && <Loading />}
      </GameContainer>
    </Container>
  )
}

export default GameBoard

const Container = styled.main`
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  color: white;

  @media (min-width: 599px) {
    padding-top: 50px;
  }
`
const GameContainer = styled.div`
  max-width: 600px;
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  // background: rgb(255, 255, 255, 0.2);

  @media (min-width: 599px) {
    width: 80%;
    max-width: 900px;
    padding: 40px;
    height: 60vh;
  }
`
