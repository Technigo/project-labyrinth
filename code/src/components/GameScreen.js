import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'

import BackgroundImgMobile from '../images/game-screen-mobile.jpg'
import BackgroundImg from '../images/game-screen.jpg'

import { secondFetch } from "../reducers/maze"
import maze from "../reducers/maze"

const GameScreen = () => {
    const dispatch = useDispatch()

    const description = useSelector((store) => store.maze.description);

    const actions = useSelector((store) => store.maze.moves);

    const name = useSelector((store) => store.maze.username)

    const isLoading = useSelector((store) => store.maze.isLoading);

    const onClick = (direction) => {
        dispatch(secondFetch(direction))
        dispatch(maze.actions.setLoading(isLoading))
    }

    if (!isLoading) {
        return (
        <Main>
            <Chat className="nes-balloon from-left">
                <Story>
                    Hello {name}! {description}
                </Story>
            </Chat>
            {actions.map((action) => (
              <DialogueContainer key={action.description}>
                <DialogueBox
                  className='nes-container with-title is-centered'
                  >
                  <p class="title">{action.direction}</p>
                <p>{action.description}</p>
                <button type="button" className="nes-btn is-primary" onClick={() => onClick(action.direction)}>{action.direction}</button>
            </DialogueBox>
            </DialogueContainer>
          ))}
      </Main>
    );
  }

  return (
    <main className="game-screen">
      <div className="game-container">
        <h1>Game is loading... Please wait.</h1>
      </div>
    </main>
  );
};

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

`
const DialogueBox = styled.div`
        background-color: white;
`