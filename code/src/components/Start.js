/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TypeIt from 'typeit-react'
import styled from 'styled-components/macro'
import { maze } from 'reducers/maze'
import { FetchGame } from './FetchGame'
import { Loading } from './Loading'
import { Button } from './Buttons'
import beachWaves from '../sounds/beach.mp3'

export const Start = () => {
  const currentLocation = useSelector((store) => store.maze)
  const [userName, setUserName] = useState('')
  const [audio] = useState(new Audio(beachWaves))
  const dispatch = useDispatch()

  useEffect(() => {
    audio.loop = true
    audio.play()
    return () => audio.pause()
  }, [audio])

  const onNameSubmit = (event) => {
    event.preventDefault()
    dispatch(maze.actions.setUser(userName))
    dispatch(FetchGame())
  }
  if (currentLocation.isLoading) return <Loading />
  return (
    <StartPage>
      <TypeIt
        options={{ speed: 50, cursor: false }}>
        <StartText>
          <p>
            You have a burning ache in your throat
            as you emerge on the beach of the island.
          </p>
          <p>
            You remember the storm that sunk your ship...
          </p>
          <p>
            ...but do you remember your name, sailor?
          </p>
        </StartText>
      </TypeIt>
      <form onSubmit={(event) => onNameSubmit(event)}>
        <label htmlFor="name">
          <FormDiv>
            <Input type="text" id="name" onChange={(event) => setUserName(event.target.value)} />
            <Button type="submit">Enter</Button>
          </FormDiv>
        </label>
      </form>
    </StartPage>
  )
}

const StartPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
`

export const StartText = styled.div`
max-width: 400px;
height: 265px;
font-size: 24px;
text-shadow: whitesmoke 2px 2px;

@media (min-width: 768px) {
  font-size: 32px;
  height: 400px;
}
`

const FormDiv = styled.div`
display:flex;
flex-direction: column;
`

const Input = styled.input`
border: inset;
border-radius: 6px;
font-size: 16px;
background-color: #AEAD8A;
&:focus {
  border: 3px solid #555;
  background-color: #EEEA8A;
}
`
