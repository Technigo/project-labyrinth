import React from 'react'
import { useSelector } from 'react-redux'
import StartScreen from './StartScreen'
import LastPage from './LastPage'
import { Innerwrapper, Outerwrapper } from './GlobalStyles'
import Loading from './Loading'

const Container = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const loadingState = useSelector((store) => store.loading.load)

  if (loadingState) {
    return (
      <Loading />
    )
  }
  return (
    <Outerwrapper coordinates={coordinates}>
      <Innerwrapper>
        {coordinates === '' && <StartScreen />}
        {coordinates !== '' && <LastPage />}
      </Innerwrapper>
    </Outerwrapper>
  )
}
export default Container;