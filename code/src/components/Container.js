import React from 'react'
// import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { CompassAnimation } from 'components/LoadingStates/CompassAnimation';
// import { labyrinth } from './reducers/labyrinth'
// import { loading } from './reducers/loading'
import StartPage from './StartPage.js'
import LabyrinthPage from './LabyrinthPage/LabyrinthPage.js'

const Container = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const isLoading = useSelector((store) => store.loading.isLoading)

  return (
    <div className="Wrapper">
      {!isLoading ? (
        <div className="Container">
          {coordinates === '' && <StartPage />}
          {coordinates !== '' && <LabyrinthPage />}
        </div>
      ) : (
        <CompassAnimation />
      )}
    </div>
  )
}

export default Container;