import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'

import { secondFetch } from "../reducers/maze"
import maze from "../reducers/maze"

const Dialogue = () => {
    const dispatch = useDispatch()

    const moves = useSelector((store) => store.maze.moves);
    const isLoading = useSelector((store) => store.maze.isLoading);

    const onPlayGame = (direction) => {
        dispatch(secondFetch(direction))
        dispatch(maze.actions.setLoading(isLoading))
    }

    return (
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
                    onClick={() => onPlayGame(action.direction)}>
                        Go to the {action.direction}
                </Button>
            </DialogueBox>
            ))}
        </DialogueContainer>
    )
}

export default Dialogue

const Text = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
        font-size: 16px;
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
    @media (min-width: 1025px) {
        font-size: 16px;
    }
`