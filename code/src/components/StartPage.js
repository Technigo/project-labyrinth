// GAMESTART TO STARTPAGE

import React, { useState } from "react"
import { fetchInitialData, labyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"
import { MazeLoader } from "components/MazeLoader"
import styled from "styled-components"
import thelord from "components/thelord.mp3"

export const StartPage = () => {
  const dispatch = useDispatch()
  const response = useSelector((state) => state.labyrinth.response)
  const [username, setUsername] = useState("")

  const onGameStart = (event) => {
    event.preventDefault()
    dispatch(labyrinth.actions.setusername(username))
    dispatch(fetchInitialData(username))
    setUsername("")
  }

  const audio = new Audio(thelord)
  const startMusic = () => {
    audio.play()
    audio.volume = 0.3
  }
  startMusic()

  return (
    <MainWrapper>
      {response.coordinates === undefined && (
        <>
          <TextCard>
            <form>
              <h2> 'The Temple of *ech*igo' </h2>
              <p> Enter your name to start. </p>
              <MazeLoader />
              <Input
                required
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <Button type="submit" onClick={(event) => onGameStart(event)}>
                START
              </Button>
            </form>
          </TextCard>
        </>
      )}
    </MainWrapper>
  )
}

const Button = styled.button`
  background: white;
  border: 2px solid white;
  width: 100px;
  height: 36px;
  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;
`

const Input = styled.input`
  background: none;
  outline: none;
  border: 2px solid white;
  width: 200px;
  height: 30px;
  margin: 15px;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  font-weight: 700;
`

const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px;
  background-color: rgb(187, 187, 187, 0.25);
  width: 60%;
  min-height: 250px;
  @media (max-width: 768px) {
    padding: 15px;
    width: 80%;
  }
`

const MainWrapper = styled.section`
  background-image: url(./assets/forest.jpg);
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100wh;
  text-align: center;
  justify-content: center;
  margin: 0px;
  // padding-top: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${
    "" /* @media (max-width: 768px) {
  padding-top: 40px;
} */
  }
`
