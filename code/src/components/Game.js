import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro"

import { Starter } from "./Starter"
import { moveMaze } from "../reducers/maze"
import Confetti from "./Confetti"

// Styled components
const AppMain = styled.section`
  max-width: 600px;
  margin: 0 auto;
`

const GameContainer = styled.section`
  max-width: 500px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  margin: 10px;
`
const InfoDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TextP = styled.p`
  color: grey;
  font-style: italic;
  
`

const NavDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`
const NavTextSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`
const NavButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  max-width: 100px;
  padding: 10px;
  margin: 0 20px;
  opacity: 1;
  &:hover {
    transform: scale(1.1);
  }
`
const TheEndDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
`
const IconImg = styled.img`
  max-height: 100px;
  
  margin: 20px 0;
  animation: pulse 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;


  @keyframes pulse {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.05)
    }
    100% {
      transform: scale(1)
    }
  }
`
const EndP = styled.p`
  color: #FADD57;
  font-size: 1.5em;

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
        return "#EAC082"

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
        return "#FADD57"

      default:
        return "#FADD57"
    }
  }

  const setIcon = () => {
    switch (data.coordinates) {
      case "0,0":
        return "./assets/img1.svg"

      case "1,0":
        return "./assets/img2.svg"

      case "1,1":
        return "./assets/img3.svg"

      case "0,1":
        return "./assets/img4.svg"

      case "0,2":
        return "./assets/img5.svg"

      case "0,3":
        return "./assets/img6.svg"

      case "1,3":
        return "./assets/img7.svg"

      default:
        return "#FADD57"
    }
  }

 

  const dispatch = useDispatch()

  return (
    <>
      <AppMain>
        {!userName ? (
          <Starter />
        ) : (
          <>
            <GameContainer>
              <InfoDiv>
                <IconImg src={setIcon()}></IconImg>
                <p>{data.description}</p>
                <TextP>Your coordinates are: {data.coordinates}</TextP>
              </InfoDiv>

              {data.coordinates !== "1,3" ? (
                <>
                  <NavDiv>
                    {data.actions.map(action => (
                      <p key={action.direction}>
                        <NavTextSpan style={{ color: setBgColor() }}>
                          {action.direction}
                        </NavTextSpan>
                        - {action.description}
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
                        Move {action.direction}
                      </NavButton>
                    ))}
                  </ButtonContainer>
                </>
              ) : (
                <TheEndDiv>
                  {data.actions.length === 0 && (
                   <Confetti />
                  )}
                  <EndP>You made it!</EndP>
                  
                </TheEndDiv>
              )}
            </GameContainer>
          </>
        )}
      </AppMain>
    </>
  )
}

export default Game
