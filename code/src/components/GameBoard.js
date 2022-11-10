import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import NextDirection from './Direction'

const GameBoard = () => {
  const description = useSelector((state) => state.game.description)

  return (
    <>
      <StyledHeadingOne><h1>Labyrinth</h1></StyledHeadingOne>
      <MainDescriptionWrapper>
        <h2>{description.description} </h2>
        <NextDirection actions={description.actions} />
      </MainDescriptionWrapper>
    </>
  )
}
export default GameBoard

const MainDescriptionWrapper = styled.div`
  padding: 24px;
  border: solid lightgrey 2px;
  background-color: black;
`

const StyledHeadingOne = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
`