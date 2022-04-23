import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import labyrinth, { generateQuestion } from 'reducers/labyrinth'
import styled from 'styled-components'

const DirectionButton = () => {
  const directionAlternatives = useSelector((store) =>
    store.labyrinth.question.actions?.map((item) => item.direction),
  )
  const dispatch = useDispatch()

  const direction = {
    north: 'North',
    west: 'West',
    east: 'East',
    south: 'South',
  }

  const onClick = (direction) => {
    dispatch(generateQuestion(direction))
    dispatch(labyrinth.actions.setStep(direction))
  }

  const StyledDirectionButtons = styled.button`
    width: 100px;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 24px;
    border-radius: 8px;
    border: none;
    background: linen;
    margin: 8px;
  `

  return (
    <>
      <StyledDirectionButtons
        type="button"
        value={direction.north}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.north)}
      >
        GO {direction.north}
      </StyledDirectionButtons>

      <StyledDirectionButtons
        type="button"
        value={direction.west}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.west)}
      >
        GO {direction.west}
      </StyledDirectionButtons>

      <StyledDirectionButtons
        type="button"
        value={direction.east}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.east)}
      >
        GO {direction.east}
      </StyledDirectionButtons>

      <StyledDirectionButtons
        type="button"
        value={direction.south}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.south)}
      >
        GO {direction.south}
      </StyledDirectionButtons>
      {/* <Restart /> */}
    </>
  )
}
export default DirectionButton
