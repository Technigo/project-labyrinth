import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro"

import { Starter } from "./Starter"
import { moveMaze } from "../reducers/maze"
import Loader from "./Loader"

/* import { NavButton } from "styling/styling" */

// Styled components
const AppMain = styled.section`
  max-width: 600px;
  margin: 0 auto;
`
const GameContainer = styled.section`
  max-width: 500px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.6);
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
const NextDiv = styled.div`
  text-align: center;
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
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  max-width: 100px;
  padding: 10px;
  margin: 0 20px;
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

  const dispatch = useDispatch()

  return (
    <AppMain>
      {!userName ? (
        <Starter />
      ) : (
        <GameContainer>
          <InfoDiv>
            <p>{data.description}</p>
            <p>Your coordinates are: {data.coordinates}</p>
          </InfoDiv>

          {data.coordinates !== "1,3" ? (
            <>
              <NavDiv>
                {data.actions.map(action => (
                  <p key={action.direction}>{action.description}</p>
                ))}
              </NavDiv>

              <ButtonContainer>
                {data.actions.map(action => (
                  <NavButton
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
