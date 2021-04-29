import React from 'react'
import { useSelector } from 'react-redux'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("./images/forrest.jpg")
`

const Labyrinth = () => {
  const response = useSelector(store => store.labyrinth.response)

  const isEmpty = (obj) => {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

  return (
    <Main>
      {isEmpty(response)
        ? <StartScreen /> 
        : <GameScreen />
      }
    </Main>
  )
}

export default Labyrinth