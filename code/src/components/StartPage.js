import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinth } from '../reducers/description';
import { fetchStart } from '../reducers/description';

export const StartPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStart());
  };

  const onInputChange = (event) => {
    dispatch(labyrinth.actions.setUsername(event.target.value));
  };

  return (
    <>
      <h1>Do you want to enter the labyrinth?</h1>
      <form onSubmit={onSubmit}>
        <label>
          <p>Write your name in the box below 👇</p>
          <input type="text" required onChange={onInputChange} />
        </label>
        <button>🗿 Lets do the labyrinth!</button>
      </form>
    </>
  );
};
