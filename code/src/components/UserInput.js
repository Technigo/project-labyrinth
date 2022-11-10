/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import styled from 'styled-components/macro'
import Lottie from 'react-lottie';
import { useDispatch } from 'react-redux';
import labyrinth, { generateLabyrinth } from 'reducers/labyrinth'

import maze from '../lotties/maze.json';
import { ChildContainer } from '../styles/GlobalStyles'

const UserInput = () => {
  const [userInputValue, setUserInputValue] = useState('')
  const dispatch = useDispatch()
  // const author = useSelector((store) => store.quotes.author)

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUsername(userInputValue));
    dispatch(generateLabyrinth());
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: maze,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

	 return (
    <ChildContainer>
      <Lottie options={defaultOptions} height={150} width={150} />
      <h1>Welcome to the maze</h1>
	    <form onSubmit={(event) => onFormSubmit(event)}>
        <label htmlFor="input">
			    Enter your name:
          <Input id="input" placeholder="Type here" value={userInputValue} type="text" onChange={(event) => setUserInputValue(event.target.value)} />
        </label>
        <button type="submit"> Start </button>
      </form>
    </ChildContainer>
  )
}

export default UserInput;

const Input = styled.input`
  font-size: 12px;
  margin: 10px;
  padding: 9px 5px 5px 40px;
  background: white;
	font-weight: 400;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #3fceea;
		font-family: "Press Start 2P", cursive;
  }
`;
