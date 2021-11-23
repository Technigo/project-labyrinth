import React, { useState } from "react"
import {
  fetchInitialData,
  labyrinth,
  continueLabyrinth,
} from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"
// import { GameStart } from "./GameStart"

export const MainPage = () => {
  //  const [username, setUsername] = useState("")
  const loading = useSelector((state) => state.ui.loading)
  const response = useSelector((state) => state.labyrinth.response)
  const actions = useSelector((state) => state.labyrinth.response.actions)

  const dispatch = useDispatch()
  console.log(response)

  // I added prevent default and username.lenght value to disable the button to start the game without a username
  // const onGameStart = (event) => {
  //   event.preventDefault()
  //   if (username.length === 0) {
  //     alert("Please enter a username to start")
  //   } else {
  //     dispatch(labyrinth.actions.setusername(username))
  //     dispatch(fetchInitialData(username))
  //     setUsername("") // added this to clean the input box
  //   }
  // }
  const onButtonClick = (type, direction) => {
    dispatch(continueLabyrinth(type, direction))
  }

  // changed the first div to the form to make it work with the keypress with "enter"

  return (
    loading === false && (
      <>
        <div>
          <h1>{response.description}</h1>
          {response.actions !== undefined && (
            <>
              <div>
                {actions.map((action) => (
                  <div key={action.description}>
                    <button
                      onClick={() =>
                        onButtonClick(action.type, action.direction)
                      }
                    >
                      Move {action.direction}
                    </button>
                    <p>{action.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </>
    )
  )
}
