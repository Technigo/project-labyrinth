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
font-family: 'EB Garamond', serif;
font-size: larger;
width: 100vw;
height: 100vh;
position: relative;
z-index: 2000;
display: flex;
justify-content: center;
align-items: center;
`

const Innerwrapper = styled.div`
  background: rgba(77, 83, 89, 0.7);
  margin: 20px;
  width: 40%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #508484;

  @media (max-width:600px) {
    width: 90%;
    font-size: smaller;
    padding: 0.5rem;
  }
`
