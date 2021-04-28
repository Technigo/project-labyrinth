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

  @media (min-width: 768px){
    width: 600px;
  }
  @media (min-width: 1024px){
  width: 800px;
  }
`
const Next = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px){
    flex-direction: row;
}
`

const Icon = styled.span`
font-size: 40px;`

const GameScreen = () => {
  const dispatch = useDispatch();
  const description = useSelector(store => store.labyrinth.description)
  const actions = useSelector(store => store.labyrinth.actions)
  const isLoading = useSelector(store => store.labyrinth.isLoading)
  const coordinates = useSelector(store => store.labyrinth.coordinates)

  const onChooseDirection = (e) => {
    dispatch(labyrinth.actions.setDirection(e.target.value))
    dispatch(generateStory())
  }

  const setIcon = () => {
    switch(coordinates){
      case "0,1": return <Icon role="img" aria-label="robot">🤖</Icon>
      case "0,2": return <Icon role="img" aria-label="music">🎵</Icon>
      case "0,3": return <Icon role="img" aria-label="scroll">📜</Icon>
      case "1,0": return <Icon role="img" aria-label="star">✨</Icon>
      case "1,1": return <i className="nes-icon is-medium heart"></i>
      case "1,3": return <i className="nes-icon trophy is-large"></i>
      default: return <i className="nes-icon is-medium star"></i>
    }
  }

 if(isLoading){
      return <Container> <Loading /> </Container>
    }
    console.log(coordinates)
  return (
    <Container>
      <div className="nes-container is-dark with-title with-title is-centered">
        <p className="title">
        {actions
          ? setIcon()
          : <></>
        }
        </p>
        <p style={{fontSize: "14px"}}>{description}</p>
      </div>
      <Next>
        {actions
        ? actions.map(button =>
          <div className="nes-container is-rounded is-dark"
            key={button.description}
            style={{width: window.innerWidth>1024?"50%":"auto",
            flexGrow:"1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"}}>
          <p style={{fontSize: "14px"}}>{button.description}</p>
          <button type="button"
            className="nes-btn"
            style={{marginTop: "10px", width: "fit-content"}}
            value={button.direction}
            onClick={(e) => onChooseDirection(e)}>
            Go {button.direction}
          </button></div>)
        : <></>
        }
      </Next>
    </Container>
  )
}

export default GameScreen;