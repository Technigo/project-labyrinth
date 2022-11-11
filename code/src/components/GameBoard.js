import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RestartButton } from './styling/MainStyles'
import NextDirection from './Direction'

const GameBoard = () => {
  const description = useSelector((state) => state.game.description)

  const handleStartOverClick = () => {
    window.location.reload()
  };

  return (
    <>
      <StyledHeadingOne><h1>Labyrinth</h1></StyledHeadingOne>
      <MainDescriptionWrapper>
        <h2>{description.description} </h2>
        <NextDirection actions={description.actions} />
        {description.coordinates === '1,3' && (
          <RestartButton type="button" onClick={handleStartOverClick}>Restart</RestartButton>
        )}
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
  width: 100%;
`