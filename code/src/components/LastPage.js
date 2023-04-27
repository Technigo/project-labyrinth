import React from 'react'
import labyrinth from 'reducers/labyrinth'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import TypeIt from 'typeit-react';
import Directions from './Directions';

const LastPage = () => {
  const description = useSelector((store) => store.labyrinth.description)
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const dispatch = useDispatch()

  const restart = () => {
    dispatch(labyrinth.actions.setUsername(''))
    window.location.reload()
  }

  return (
    <GameCard>
      <TypeIt>{description}</TypeIt>
      <FlexDiv>
        {coordinates !== '1,3' && <Directions />}
        <button className="restart-btn" type="button" onClick={restart}>Restart</button>
      </FlexDiv>
    </GameCard>
  )
}

export default LastPage

const GameCard = styled.div`
  display: flex;
  
  }
  .instructions-btn {
  display: none;
  }
  .restart-btn {
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 34px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #79c99e;
  color: #79c99e;
  font-size: 1.2rem; 
  }
  @media (min-width: 668px) {
    padding: 1rem 2rem;
    height: 70%;
  }
  @media (min-width: 1025px) {
  }
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `