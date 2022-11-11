import React from 'react'
// import ReturnIcon from 'images/back.png'
import { useDispatch } from 'react-redux'
import game from 'reducers/game'
import { BackButton } from './MainStyles'

const GoBack = () => {
  const dispatch = useDispatch()

  const gobackbtn = () => {
    dispatch(game.actions.setPrevious())
  }

  return (
    <BackButton onClick={() => gobackbtn()} type="button">Go back</BackButton>
  )
}
export default GoBack