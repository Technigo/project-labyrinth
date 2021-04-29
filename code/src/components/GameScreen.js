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
/* const Text = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
`
const DialogueContainer = styled.div`
  display: flex;
  flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
`
const DialogueBox = styled.div`
  position: relative;

  background-color: white;
  padding: 25px 10px 50px 10px;
  margin-bottom: 30px;
    @media (min-width: 768px) {
      width: 45%;
      min-height: 250px;
      margin: 10px;
    }
`
const Button = styled.button`
  position: absolute;
  bottom: 15px;
  right: 0;
  left: 0;
  margin: auto;

  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
` */