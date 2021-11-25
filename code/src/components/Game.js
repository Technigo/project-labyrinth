import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro"

import { Starter } from "./Starter"
import { moveMaze } from "../reducers/maze"
import Loader from "./Loader"
import { Rayoflight } from "lib/svg"

/* import { NavButton } from "styling/styling" */

// Styled components
const AppMain = styled.section`
  max-width: 600px;
  margin: 0 auto;
`
const GameContainer = styled.section`
  max-width: 500px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid black;
  border-radius: 10px;
`
const InfoDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`

const NavDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`
const NavButton = styled.button`
  //   background-color: lightblue;
  border: none;
  border-radius: 10px;
  max-width: 100px;
  padding: 10px;
  margin: 0 20px;
  opacity: 1;
`
const TheEndDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`

// Game component
const Game = () => {
  const data = useSelector(store => store.maze.response)
  const userName = useSelector(store => store.maze.username)
  console.log("username", userName) // CONSOLE
  console.log("data", data) // CONSOLE

  const setBgColor = () => {
    switch (data.coordinates) {
      case "0,0":
        return "#FADD57"

      case "1,0":
        return "#C0E5AC"

      case "1,1":
        return "#C3EEEE"

      case "0,1":
        return "#F0D5EB"

      case "0,2":
        return "#BCC5A3"

      case "0,3":
        return "#C0D0EE"

      case "1,3":
        return "#EAC082"

      default:
        return "#FADD57"
    }
  }

  const setIcon = () => {
    switch (data.coordinates) {
      case "0,0":
        return "./assets/img1.svg"

      case "1,0":
        return "./assets/pic1.svg"

      case "1,1":
        return "#C3EEEE"

      case "0,1":
        return "#F0D5EB"

      case "0,2":
        return "#BCC5A3"

      case "0,3":
        return "#C0D0EE"

      case "1,3":
        return "#EAC082"

      default:
        return "#FADD57"
    }
  }

  const dispatch = useDispatch()

  return (
    <AppMain>
      {!userName ? (
        <Starter />
      ) : (
        <GameContainer>
          <InfoDiv>
            <img src={setIcon()}></img>
            <p>{data.description}</p>
            <p>Your coordinates are: {data.coordinates}</p>

            {/* <Rayoflight /> */}
          </InfoDiv>

          {data.coordinates !== "1,3" ? (
            <>
              <NavDiv>
                {data.actions.map(action => (
                  <p key={action.direction}>
                    {action.direction} - {action.description}
                  </p>
                ))}
              </NavDiv>
              <ButtonContainer>
                {data.actions.map(action => (
                  <NavButton
                    style={{ background: setBgColor() }}
                    key={action.description}
                    onClick={() =>
                      dispatch(moveMaze(action.direction, action.type))
                    }
                  >
                    {action.type} {action.direction}
                  </NavButton>
                ))}
              </ButtonContainer>
            </>
          ) : (
            <TheEndDiv>
              <p>
                You made it{" "}
                <span role="img" aria-label="emoji">
                  &#127891;
                </span>
              </p>
              <Loader />
            </TheEndDiv>
          )}
        </GameContainer>
      )}
    </AppMain>
  )
}

export default Game
