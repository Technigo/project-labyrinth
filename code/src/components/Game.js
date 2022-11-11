/* eslint-disable linebreak-style */
import React from 'react';
import { fetchGame } from 'reducers/choices';
import { useSelector, useDispatch } from 'react-redux';

export const Game = () => {
  const description = useSelector((state) => state.choices.description)
  const list = useSelector((state) => state.choices.items)
  const dispatch = useDispatch()

  // If length of choices for user is more than 0, display direction buttons
  return (
    <>
      <h1>{description}</h1>

      {list.map((choice) => (
        <div key={list.indexOf(choice)}>
          <p>{choice.description}</p>
          {console.log('list:', list)}
          {list && (
            <button
              type="button"
              onClick={() => dispatch(fetchGame(choice.direction, choice.type))}>
              {choice.direction}
            </button>
          )}
          {!list && (
            <button
              type="button"
              onClick={() => {}}>
              Play again
            </button>
          )}
        </div>
      ))}
    </>
  )
}
