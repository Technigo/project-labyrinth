/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TypeIt from 'typeit-react'
import styled from 'styled-components/macro'
import { maze } from 'reducers/maze'
import FetchGame from './FetchGame'
import { Loading } from './Loading'
import { Button } from './Buttons'

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
            <StyledButton type="submit">Enter</StyledButton>
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

const StartText = styled.div`
max-width: 400px;
font-size: 30px;
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
const StyledButton = styled(Button)`
color: black;
text-shadow: none;
`
