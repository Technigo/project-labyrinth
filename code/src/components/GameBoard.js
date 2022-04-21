import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
// import { Loading } from './Loading'

import starter from '../assets/starter.jpg'
import exit from '../assets/exit.jpg'
import elevator from '..assets/elevator.jpg'

import StartingPage from './StartingPage'
import { Labyrinth } from './Labyrinth'

const GameBoard = () => {
  const { coordinates } = useSelector((store) => store.steps.currentStep)
  // const loading = useSelector((store) => store.ui.isLoading)
  const setBackImage = () => {
    let img = `url(${starter})`
    switch (coordinates) {
      case '0,0':
        img = `url(${starter})`
        break
      case '1,0':
        img = `url(${elevator})`
        break
      case '1,1':
        img = `url(${exit})`
        break
      case '0,1':
        img = `url(${exit})`
        break
      case '0,2':
        img = `url(${exit})`
        break
      case '0,3':
        img = `url(${exit})`
        break
      case '1,3':
        img = `url(${exit})`
        break
      default:
        img = `url(${starter})`
    }
    return img
  }

  return (
    <Container style={{ background: setBackImage(coordinates) }}>
      {coordinates ? <Labyrinth /> : <StartingPage />}
      {/* <Loading /> */}
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
