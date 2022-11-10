/* eslint-disable array-callback-return */
import React from 'react'
import { generateActionData } from 'reducers/labyrinth'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

const LabyrinthPart = () => {
  const description = useSelector((store) => store.labyrinth.description)
  const actions = useSelector((store) => store.labyrinth.actions)
  const dispatch = useDispatch()

  return (
    <GameCard>
      <p>{description}</p>
      {actions.map((action) => {
        return (
          <>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(generateActionData(action.type, action.direction))}> Go {action.direction}</button>
          </>
        )
      })}
    </GameCard>
  )
}
export default LabyrinthPart

// STYLING

const GameCard = styled.div`
    border: 2px solid;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p + p {
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
    }
    button + p{
      margin-top: 1rem;
    }

    @media (min-width: 668px) {
      text-align: left; // Eller?

    }
    @media (min-width: 1025px) {
      
    }
`