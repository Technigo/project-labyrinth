import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'

import BackgroundImgMobile from '../images/game-screen-mobile.jpg'
import BackgroundImg from '../images/game-screen.jpg'

import LoadingScreen from './LoadingScreen'
import Balloon from './Balloon'
import Dialogue from './Dialogue'

const GameScreen = () => {

  const username = useSelector((store) => store.maze.username)
  const isLoading = useSelector((store) => store.maze.isLoading);
  const error = useSelector((store) => store.maze.error)

  return (
    <>
      {isLoading &&
      <LoadingScreen />
      }
      {!isLoading && (
      <>
        {error && `Ooops, something went wrong: ${error}`}
        {username &&
        <Main>
          <Balloon />
          <Dialogue />

      {/*{winner &&
          <i className="nes-icon is-large star"></i>
          } */}

        </Main>
        }
      </>
      )}
    </>
  )
}

export default GameScreen;

const Main = styled.div`
  background-image: url(${BackgroundImgMobile});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  padding: 10px;
    @media (min-width: 768px) {
      padding: 25px;
    }
    @media (min-width: 1025px) {
      background-image: url(${BackgroundImg})
    }
`