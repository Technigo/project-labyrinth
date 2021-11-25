import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const compassDirection = (direction) => {
  if (direction === 'South') {
    return "url('./assets/comp_south.svg')"
  } else if (direction === 'East') {
    return "url('./assets/comp_east.svg')"
  } else if (direction === 'West') {
    return "url('./assets/comp_west.svg')"
  } else {
    return "url('./assets/comp_north.svg')"
  }
}

export const Compass = () => {
  const direction = useSelector((store) => store.game.direction)
  return (
    <div>
      <CompassWrapper
        style={{ backgroundImage: `${compassDirection(direction)}` }}
      />
    </div>
  )
}

const CompassWrapper = styled.div`
  height: 125px;
  width: 125px;
  margin: 20px auto;
  display: flex;
  background-repeat: no-repeat;
`
