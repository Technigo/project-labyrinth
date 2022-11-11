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
      <h2>{description}</h2>
      {actions.map((action) => {
        return (
          <ActionDiv>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(generateActionData(action.type, action.direction))}> Go {action.direction}</button>
          </ActionDiv>
        )
      })}
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
    background-color: #222727;
    border-radius: 20px;
    color: white;


    button {
      margin-top: 1rem;
      background-color: #01FFC4;
      border: none;
      border-radius: 6px;
    }

    @media (min-width: 668px) {
      /* text-align: left; // Eller? */

    }
    @media (min-width: 1025px) {
      
    }
`
const ActionDiv = styled.div`
  background-color: #323737;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 10px 5px;
`