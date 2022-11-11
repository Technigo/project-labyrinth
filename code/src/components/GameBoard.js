import React from 'react'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { RestartButton } from './styling/MainStyles'
// import { BackButton } from './styling/MainStyles'
import NextDirection from './Direction'
// import game from '../reducers/game'

const GameBoard = () => {
// const dispatch = useDispatch()
  const description = useSelector((state) => state.game.description)

  const handleStartOverClick = () => {
    window.location.reload()
  };

  // const gobackbtn = () => {
  //   dispatch(game.actions.setPrevious())
  // }

  return (
    <>
      <StyledHeadingOne><h1>Labyrinth</h1></StyledHeadingOne>
      <MainDescriptionWrapper>
        <h2>{description.description} </h2>
        <NextDirection actions={description.actions} />
        {/* <BackButton onClick={() => gobackbtn()} type="button">Go Back</BackButton> */}
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