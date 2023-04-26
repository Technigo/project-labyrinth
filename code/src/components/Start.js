import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TypeIt from 'typeit-react'
import styled from 'styled-components/macro'
import { maze } from 'reducers/maze'
import FetchGame from './FetchGame'
import { Loading } from './Loading'

export const Start = () => {
  const currentLocation = useSelector((store) => store.maze)
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch()

  const onNameSubmit = (event) => {
    event.preventDefault()
    dispatch(maze.actions.setUser(userName))
    dispatch(FetchGame())
  }
  if (currentLocation.isLoading) return <Loading />
  return (
    <StartPage>
      <TypeIt
        options={{ speed: 50 }}>
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
          <input type="text" id="name" onChange={(event) => setUserName(event.target.value)} />
          <button type="submit">Enter</button>
        </label>
      </form>
    </StartPage>
  )
}

const StartPage = styled.div`
border: red solid 2px;
display: flex;
flex-direction: column;
align-items: center;
`

const StartText = styled.div`
border: solid 1px blue;
width: 350px;
font-size: 20px;
`
