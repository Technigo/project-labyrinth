import React from 'react'
import labyrinth from 'reducers/labyrinth'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import TypeIt from 'typeit-react';
import Directions from './Directions';

const LabyrinthPart = () => {
  const description = useSelector((store) => store.labyrinth.description)
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  console.log(coordinates)

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

export default LabyrinthPart

// STYLING

const GameCard = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: #010202c9;
  border-radius: 20px;
  color: white;

  button {
    margin-top: 1rem;
    background-color: #01FFC4;
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
  }

  .instructions-btn {
  display: none;
  }

  .restart-btn {
    background-color: transparent;
    border: 1px solid #01FFC4;
    color: #01FFC4;
  }

  @media (min-width: 668px) {
    padding: 1rem 2rem;
    min-height: 400px;
    width: 700px;

  }
  @media (min-width: 1025px) {
    min-height: 500px;
    min-width: 900px;
  }
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `