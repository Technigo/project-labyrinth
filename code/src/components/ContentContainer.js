import React from 'react'
import { useSelector } from 'react-redux'
import StartPage from './StartPage'
import LabyrinthPart from './LabyrinthPart'
import { Outerwrapper } from './GlobalStyles'

const ContentContainer = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)

  return (
    <Outerwrapper>
      {coordinates === '' && <StartPage />}
      {coordinates !== '' && <LabyrinthPart />}
    </Outerwrapper>
  )
}
export default ContentContainer