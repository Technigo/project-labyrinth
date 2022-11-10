import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { labyrinth, startGame } from 'reducers/labyrinth'

export const Labyrinth = () => {
  const labyrinthPath = useSelector((store) => store.labyrinth.username)
  console.log(labyrinthPath.username)
  const dispatch = useDispatch()
  dispatch(startGame)
  return (
    <div>{labyrinthPath.username} </div>
  )
}
