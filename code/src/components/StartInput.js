/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth from 'reducers/labyrinth'
// import labyrinth, { generatLabyrinth } from 'reducers/labyrinth'

const StartInput = () => {
  const [startInputValue, setStartInputValue] = useState('')
  const dispatch = useDispatch()
  // const author = useSelector((store) => store.quotes.author)

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setStart(startInputValue));
    // dispatch(generatLabyrinth());
  }
	 return (
    <div>
      <h1>Welcome to this game</h1>
	 <form onSubmit={(event) => onFormSubmit(event)}>
        <label htmlFor="input">
			Write your name here:
          <input id="input" placeholder="Your Name" value={startInputValue} type="text" onChange={(event) => setStartInputValue(event.target.value)} />
        </label>
        <button type="submit"> Start </button>
      </form>
    </div>)
}

export default StartInput;
