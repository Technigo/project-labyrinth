import React from "react"
import { labyrinth, continueLabyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"
// import { GameStart } from "./GameStart"

export const MainPage = () => {
  // const loading = useSelector((state) => state.ui.loading)
  const response = useSelector((state) => state.labyrinth.response)
  const actions = useSelector((state) => state.labyrinth.response.actions)

  const dispatch = useDispatch()
  console.log(response)

  const onButtonClick = (type, direction) => {
    dispatch(continueLabyrinth(type, direction))
  }

  // ReStart the game
  const handleRestartButton = () => {
    dispatch(labyrinth.actions.reStart())
  }

  return (
    // loading === false &&  dont need this line since loading has its own logic inside the component
    <>
      <div>
        <h1>{response.description}</h1>
        {response.coordinates !== undefined && (
          <>
            <div>
              {actions.map((action) => (
                <div key={action.description}>
                  <button
                    onClick={() => onButtonClick(action.type, action.direction)}
                  >
                    MOVE {action.direction.toUpperCase()}
                  </button>
                  <p>{action.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {response.coordinates === "1,3" && (
          <button onClick={() => handleRestartButton()}> RESTART </button>
        )}
      </div>
    </>
  )
}
