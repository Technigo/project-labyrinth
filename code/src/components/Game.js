/* eslint-disable linebreak-style */
import React from 'react';
import { fetchGame } from 'reducers/choices';
import { useSelector, useDispatch } from 'react-redux';

export const Game = () => {
  const description = useSelector((state) => state.choices.description)
  const list = useSelector((state) => state.choices.items)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{description}</h1>

      {list.map((choice) => (
        <button
          type="button"
          key={list.indexOf(choice)}
          onClick={() => dispatch(fetchGame(choice.direction, choice.type))}>
          {choice.direction}
        </button>
      ))}
    </div>
  )
}