import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLabyrinthData } from 'reducers/labyrinth'

export const Labyrinth = () => {
  const labyrinth = useSelector((store) => store.labyrinth.content)
  const dispatch = useDispatch()

  return (
    <>
    <button
      onClick={() => {
        dispatch(fetchLabyrinthData())
      }}
      >
        Start game
      </button>
      {labyrinth.map((item) => (
        <p key={item.coordinates}>{item.coordinates}</p>
      ))}
      </>
  )
}