import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/macro';
import "nes.css/css/nes.min.css";

import labyrinth, { generateStory } from '../reducers/labyrinth'
import Loading from './Loading'


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
      <div class="nes-container is-dark with-title with-title is-centered" style={{maxWidth: "600px"}}>
        <p class="title">
        {buttons && buttons.length===0
          ? <i class="nes-icon trophy is-large"></i>
          : <i class="nes-icon is-medium star"></i>
        }
        </p>
        <p>{description}</p>
      </div>
      <Next>
        {buttons
        ? buttons.map(button =>
          <button type="button"
            className="nes-btn"
            style={{marginTop: "10px"}}
            key={button.description}
            value={button.direction}
            onClick={(e) => onChooseDirection(e)}>
            {button.direction}
          </button>)
        : <></>
        }
      </Next>
      </>}
    </Container>
  )
}

export default GameScreen;