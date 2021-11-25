import React, { useState } from "react"
import { fetchInitialData, labyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { Maze } from "./Maze"

export const GameStart = () => {
  const [username, setUsername] = useState("")
  const response = useSelector((state) => state.labyrinth.response)
  const dispatch = useDispatch()

  const onGameStart = (event) => {
    event.preventDefault()
    // if (username.length === 0) {
    //   alert("Please enter a username to start")
    // } else {
    dispatch(labyrinth.actions.setusername(username))
    dispatch(fetchInitialData(username))
    setUsername("") // added this to clean the input box
  }

  return (
    <MainWrapper>
      {response.coordinates === undefined && (
        <>
          <TextCard>
            <form>
              <h1>
                Would you like to play a Maze game? Enter your name to start...
              </h1>

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
          <Maze />
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
  margin: 30px;
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
`
const MainWrapper = styled.section`
  background-image: url(./assets/forest.jpg);
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100wh;
  text-align: center;
  justify-content: center;
  margin: auto 0;
  padding-top: 200px;
`
