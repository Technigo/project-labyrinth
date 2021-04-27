import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import "nes.css/css/nes.min.css";

import labyrinth, { generateStory } from '../reducers/labyrinth'
import Loading from './Loading'


const Container = styled.div`
`

const Description = styled.h2`
`

const NextButton = styled.button`
`

const Next = styled.div`
`

const GameScreen = () => {
  const dispatch = useDispatch();
  const description = useSelector(store => store.labyrinth.description)
  const buttons = useSelector(store => store.labyrinth.buttons)
  const isLoading = useSelector(store => store.labyrinth.isLoading)

  const onChooseDirection = (e) => {
    dispatch(labyrinth.actions.setDirection(e.target.value))
    dispatch(generateStory())
  }

  return (
    <Container>
      {isLoading ? <Loading />
      : <>
      <Description>{description}</Description>
      <Next>
        {buttons
        ? buttons.map(button =>
        <button type="button"
          className="nes-btn is-primary"
          key={button.description}
          value={button.direction}
          onClick={(e) => onChooseDirection(e)}>
          {button.direction}
        </button>)
        : <></>}
      </Next>
      </>}
    </Container>
  )
}

export default GameScreen;