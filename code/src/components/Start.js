/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { startGame } from 'reducers/labyrinth'

const Start = () => {
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch();

  const onNameSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userName));
    dispatch(startGame())
  }
  return (
    <>
      <p>Kort story</p>
      <form onSubmit={(event) => onNameSubmit(event)}>
        <label>
          <input type="text" placeholder="what's your name?" onChange={(event) => setUserName(event.target.value)} />
        </label>
        <button type="submit">start</button>
      </form>
      <p>Username: {userName}</p>
    </>
  )
}

export default Start;
