import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import NextDirection from './Direction'

const GameBoard = () => {
  const description = useSelector((state) => state.game.description)

  return (
    <section>
      <div>
        <MainDescriptionWrapper>
          <h1>Labyrinth</h1>
          <h2>{description.description}</h2>
        </MainDescriptionWrapper>
        <NextDirection actions={description.actions} />
      </div>
    </section>
  )
}
export default GameBoard

const MainDescriptionWrapper = styled.div`
  padding: 10px;
  border: solid lightgrey 1px;
`