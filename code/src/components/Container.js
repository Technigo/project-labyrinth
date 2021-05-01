import React, { useEffect, useState } from 'react'
import UserForm from './UserForm.js'
import { useSelector } from 'react-redux'
import Loader from "react-loader-spinner"

import Description from './Description'
import Directions from './Directions'
import GoBack from './GoBack'
import History from './History'
import ErrorBoard from './ErrorBoard'
import RestartButton from './RestartButton.js'

import { placeImage, placefinder } from "../reducers/helpers"


const Container = () => {
  const actions = useSelector(store => store.labyrinth.actions)
  const history = useSelector(store => store.labyrinth.history)
  const error = useSelector(store => store.labyrinth.error)
  const loading = useSelector(store => store.labyrinth.loading)

  const [showActions, setShowAction] = useState(false)
  const [background, setBackground] = useState("/assets/labyrinth-Background.jpg")


  useEffect(() => {
    setShowAction(false)
    if (actions && actions.description) {
      const currentMessageLength = actions.description.length
      setTimeout(() => {
        setShowAction(true)
      }, currentMessageLength * 112)

      const place = placefinder(actions.coordinates)
      if (place) {
        const backgroundImage = placeImage(place)
        setBackground(backgroundImage)
      }
    }

  }, [actions])

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat"
      }}
    >

      {error && <ErrorBoard error={error} />}
      {actions && !error
        ? <div className="content-container">
          {loading &&
            <div className="loader">
              <Loader
                type="BallTriangle"
                color="brown"
                height={100}
                width={100}
                timeout={1000}
              />
            </div>
          }
          {!loading && < Description />}
          {!loading && showActions && <Directions />}
          <History />
          {history.length > 0 && showActions && !loading && <GoBack />}
          {actions.coordinates === "1,3" && showActions && <RestartButton  setBackground={setBackground} />}
        </div>
        : <UserForm />}

    </div>
  )
}

export default Container