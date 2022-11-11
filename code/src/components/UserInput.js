/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux';
import labyrinth, { generateLabyrinth } from 'reducers/labyrinth'
import { ChildContainer, StyledHeading, Button } from '../styles/GlobalStyles'

const UserInput = () => {
  const [userInputValue, setUserInputValue] = useState('')
  const dispatch = useDispatch()
  // const author = useSelector((store) => store.quotes.author)

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUsername(userInputValue));
    dispatch(generateLabyrinth());
  }

	 return (
    <ChildContainer>
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_92fyiqta.json"
        background="transparent"
        speed="1"
        style={{ width: '250px',
          height: '250px' }}
        loop
        autoplay />
      <StyledHeading>Welcome to the maze</StyledHeading>
	    <form autoComplete="off" onSubmit={(event) => onFormSubmit(event)}>
        <label htmlFor="input">
			    Enter your name:
          <Input id="input" value={userInputValue} type="text" onChange={(event) => setUserInputValue(event.target.value)} />
        </label>
        <Button type="submit"> Start </Button>
      </form>
    </ChildContainer>
  )
}

export default UserInput;

const Input = styled.input`
  font-family: "Press Start 2P", cursive;
  font-size: .8em;
  box-sizing: border-box;
  margin: .8em;
  padding: .8em;
  background: transparent;
  border: 3px solid #3fceea;
  border-radius: 3px;
  width: 15vw;
  color: white;

`;
