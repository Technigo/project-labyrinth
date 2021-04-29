import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'

import BackgroundImgMobile from '../images/game-screen-mobile.jpg'
import BackgroundImg from '../images/game-screen.jpg'

import { secondFetch } from "../reducers/maze"
import maze from "../reducers/maze"
import LoadingScreen from './LoadingScreen'

const GameScreen = () => {
    const dispatch = useDispatch()

    const description = useSelector((store) => store.maze.description);
    const moves = useSelector((store) => store.maze.moves);
    const username = useSelector((store) => store.maze.username)
    const isLoading = useSelector((store) => store.maze.isLoading);
    const error = useSelector((store) => store.maze.error)

    const onClick = (direction) => {
        dispatch(secondFetch(direction))
        dispatch(maze.actions.setLoading(isLoading))
    }

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
          <Chat className="nes-balloon from-left">
            <Text>
              {description}
            </Text>
          </Chat>

          <DialogueContainer>
          {moves.map((action) => (
            <DialogueBox
              className='nes-container with-title is-centered'
              key={action.description}>
              <Text className="title">{action.direction}</Text>
              <Text>{action.description}</Text>
              <Button
                type="button"
                className="nes-btn is-primary"
                onClick={() => onClick(action.direction)}>
                  Go to the {action.direction}
              </Button>
            </DialogueBox>
          ))}
          </DialogueContainer>

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
  height: 100vh;
  width: 100%;
  background-size: cover;
  padding: 10px;
    @media (min-width: 1025px) {
      background-image: url(${BackgroundImg})
    }
`
const Chat = styled.div`
  width: 80%;
`
const Text = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
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
  padding: 25px 10px 40px 10px;
  margin-bottom: 30px;
    @media (min-width: 768px) {
      width: 45%;
      height: 250px;
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
`