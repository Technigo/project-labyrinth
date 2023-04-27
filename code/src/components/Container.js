import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import StartScreen from './StartScreen'
import LastPage from './LastPage'
// import { Innerwrapper, Outerwrapper } from './GlobalStyles'

import Loading from './Loading'

const Container = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const loadingState = useSelector((store) => store.loading.load)

  if (loadingState) {
    return (
      <Loading />
    )
  }
  return (
    <Outerwrapper coordinates={coordinates}>
      <Innerwrapper>
        {coordinates === '' && <StartScreen />}
        {coordinates !== '' && <LastPage />}
      </Innerwrapper>
    </Outerwrapper>
  )
}
export default Container;

const Outerwrapper = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 2000;
display: flex;
justify-content: center;
align-items: center;
`

const Innerwrapper = styled.div`
  background: background: rgb(200, 200, 200, 0.7);
  margin: 0 auto;
  width: 40%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
`
