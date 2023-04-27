/* eslint-disable max-len */
import React from 'react'
import { useDispatch } from 'react-redux'
import { labyrinth, startGame } from 'reducers/labyrinth'
import Lottie from 'react-lottie'
import { StartScreenWrapper, IconContainer, Form, StartScreenText, TextContainer, defaultOptions, Input, StartBtn } from './StartScreenStyles'

const StartScreen = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(startGame())
  }
  const handleInputChange = (event) => {
    dispatch(labyrinth.actions.setUserName(event.target.value))
  }
  return (
    <StartScreenWrapper>
      <IconContainer>
        <Lottie
          options={defaultOptions} />
      </IconContainer>
      <TextContainer>
        <StartScreenText>
          Welcome to the Labyrinth!<br /><br />
           Your sense of adventure is tingling as you step forward into the darkness, ready to explore what lies ahead.<br /><br />

          To navigate through the maze, use the commands North, South, East, and West to move in those directions. Your goal is to reach the end of the labyrinth, but be careful - there may be obstacles in your way!<br /><br />

          Are you ready to begin your quest? Let&apos;s go!
        </StartScreenText>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            required
            onChange={handleInputChange}
            placeholder="Enter name" />
          <StartBtn type="submit">Start game</StartBtn>
        </Form>
      </TextContainer>
    </StartScreenWrapper>
  )
}

export default StartScreen
