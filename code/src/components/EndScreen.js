import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { game } from "../reducers/game"

//CSS STYLING IMPORT
import "./endscreen.css"

export const EndScreen = () => {
  const { description } = useSelector((store) => store.game.currentPosition)

  const dispatch = useDispatch()

  const onRestart = () => {
    dispatch(game.actions.restartGame())
  }

  return (
    <section className="endscreen">
      <div className="end-description">
        <h1>...finally, you made it out.</h1>
        <p>{description}</p>

        <button className="end-button" onClick={onRestart}>
          {" "}
          restart
        </button>
      </div>
    </section>
  )
}
