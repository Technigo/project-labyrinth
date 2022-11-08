import React from 'react'
import labyrinth from 'reducers/labyrinth'
import { useDispatch, useSelector } from 'react-redux'

const LabyrinthPart = () => {
  const description = useSelector((store) => store.labyrinth.description)
  const coordinates = useSelector((store) => store.labyrinth.coordinates)

  const dispatch = useDispatch()

  return (
    <div>
      <p>{description}</p>

      {/* <button>go{}</button> */}
    </div>
  )
}
export default LabyrinthPart