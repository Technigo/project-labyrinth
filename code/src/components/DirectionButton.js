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

  return (
    <>
      <button className="directionButton"
        type="button"
        value={direction.north}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.north)}
      >
        GO {direction.north}
      </button>

      <button className="directionButton"
        type="button"
        value={direction.west}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.west)}
      >
        GO {direction.west}
      </button>

    <button className="directionButton"
        type="button"
        value={direction.east}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.east)}
      >
        GO {direction.east}
      </button>

      <button className="directionButton"
        type="button"
        value={direction.south}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.south)}
      >
        GO {direction.south}
      </button>
      {/* <Restart /> */}
    </>
  )
}
export default DirectionButton
