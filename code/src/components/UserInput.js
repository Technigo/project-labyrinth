/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { generateLabyrinth } from 'reducers/labyrinth'

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
    <div>
      <h1>Welcome to this game</h1>
	 <form onSubmit={(event) => onFormSubmit(event)}>
        <label htmlFor="input">
			Write your name here:
          <input id="input" placeholder="Your Name" value={userInputValue} type="text" onChange={(event) => setUserInputValue(event.target.value)} />
        </label>
        <button type="submit"> Start </button>
      </form>
    </div>)
}

export default UserInput;
