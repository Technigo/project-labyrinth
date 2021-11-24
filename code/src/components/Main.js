import React from "react"
import { labyrinth, continueLabyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

// import { GameStart } from "./GameStart"

export const MainPage = () => {
  // const loading = useSelector((state) => state.ui.loading)
  const response = useSelector((state) => state.labyrinth.response)
  // const { coordinates, actions } = useSelector(
  //   (state) => state.labyrinth.response.actions
  // )

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

  const Button = styled.button`
    background-color: yellow;
  `
  const MainWrapper = styled.section`
    background-image: url(./assets/forest.jpg);
    background-size: cover;
    height: 100vh;
    width: 100wh;
    text-align: center;
    justify-content: center;
    margin: auto 0;
  `

  // const setBgColor = () => {
  //   let bg = "pink"
  //   switch (coordinates) {
  //     case "0,0":
  //       bg = "red"
  //       break
  //     case "1,0":
  //       bg = "green"
  //       break
  //     case "1,1":
  //       bg = "blue"
  //       break
  //     case "0,1":
  //       bg = "yellow"
  //       break
  //     case "0,2":
  //       bg = "orange"
  //       break
  //     case "0,3":
  //       bg = "brown"
  //       break
  //     case "1,3":
  //       bg = "purple"
  //       break
  //     default:
  //       bg = "peachypuff"
  //   }
  //   return bg
  // }

  //another way of doing it:
  // const colorDictionary = {
  //   "0,0": "red",
  //   "1,0": "pink",
  //   "1,1": "blue",
  //   "0,1": "yellow",
  //   "0,2": "purple",
  //   "0,3": "green",
  //   "1,3": "orange",
  // }
  return (
    // loading === false &&  dont need this line since loading has its own logic inside the component
    <>
      <MainWrapper>
        <h1>{response.description}</h1>
        {response.coordinates !== undefined && (
          <>
            <div>
              {actions.map((action) => (
                <div key={action.description}>
                  <Button
                    onClick={() => onButtonClick(action.type, action.direction)}
                  >
                    MOVE {action.direction.toUpperCase()}
                  </Button>
                  <p>{action.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {response.coordinates === "1,3" && (
          <button onClick={() => handleRestartButton()}> RESTART </button>
        )}
      </MainWrapper>
    </>
  )
}
