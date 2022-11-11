import React, { useState } from 'react'
import labyrinth, { generateActionData } from 'reducers/labyrinth'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import TypeIt from 'typeit-react';

const LabyrinthPart = () => {
  const description = useSelector((store) => store.labyrinth.description)
  const actions = useSelector((store) => store.labyrinth.actions)
  const [isActive, setActive] = useState('false');

  const dispatch = useDispatch()

  const toggleDisplay = () => {
    setActive(!isActive);
  }

  const restart = () => {
    dispatch(labyrinth.actions.setUsername(''))
    window.location.reload()
  }

  return (
    <GameCard>
      <TypeIt>{description}</TypeIt>
      <button className={isActive ? null : 'instructions-btn'} type="button" onClick={toggleDisplay}>Click here to see directions</button>
      {actions.map((action) => {
        return (
          <div className={isActive ? 'hidden-instructions' : 'instructions'}>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(generateActionData(action.type, action.direction))}> Go {action.direction}</button>
          </div>
        )
      })}
      <button className="restart-btn" type="button" onClick={restart}>Restart</button>
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
    justify-content: center;
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
      width: 800px;
    }
`