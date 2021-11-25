import React, { useState } from "react"
import { fetchInitialData, labyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

export const GameStart = () => {
  const [username, setUsername] = useState("")
  const response = useSelector((state) => state.labyrinth.response)
  const dispatch = useDispatch()

  const onGameStart = (event) => {
    event.preventDefault()
    if (username.length === 0) {
      alert("Please enter a username to start")
    } else {
      dispatch(labyrinth.actions.setusername(username))
      dispatch(fetchInitialData(username))
      setUsername("") // added this to clean the input box
    }
  }

  return (
    <div>
      {response.coordinates === undefined && (
        <Form>
          <h1>
            Would you like to play a Maze game? Enter your name to start...
          </h1>

          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit" onClick={(event) => onGameStart(event)}>
            Start game
          </button>
        </Form>
      )}
    </div>
  )
}

const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.25);
  width: 60%;
`
const MainWrapper = styled.section`
  background-image: url(./assets/forest.jpg);
  background-size: cover;
  height: 100vh;
  width: 100wh;
  text-align: center;
  justify-content: center;
  margin: auto 0;
  padding-top: 200px;
`
