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
            <Story>
              {description}
            </Story>
          </Chat>
          {moves.map((action) => (
            <DialogueContainer key={action.description}>
              <DialogueBox className='nes-container with-title is-centered'>
                <p className="title">{action.direction}</p>
                <p>{action.description}</p>
                <button type="button" className="nes-btn is-primary" onClick={() => onClick(action.direction)}>{action.direction}</button>
              </DialogueBox>
            </DialogueContainer>
          ))}
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
const Story = styled.p`
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
`
const DialogueContainer = styled.div`
        display: flex;
        flex-direction: column;
`
const DialogueBox = styled.div`
        background-color: white;
        margin-bottom: 10px;
`