/* eslint-disable linebreak-style */
import React from 'react';
import { fetchGame } from 'reducers/choices';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

export const Game = () => {
  const description = useSelector((state) => state.choices.description)
  const list = useSelector((state) => state.choices.items)
  const dispatch = useDispatch()
  const endOfGame = list.length === 0;

  // If length of choices for user is more than 0, display direction buttons
  return (
    <>
      <h1>{description}</h1>
      {endOfGame && (
        <button
          type="button"
          onClick={() => window.location.reload()}>
        Play again
        </button>
      )}
      {list.map((choice) => (
        <div key={list.indexOf(choice)}>
          <TextBackground>{choice.description}</TextBackground>
          {console.log('list:', list)}
          {list && (
            <button
              type="button"
              onClick={() => dispatch(fetchGame(choice.direction, choice.type))}>
              {choice.direction}
            </button>
          )}
          {/* {!list && (
            <button
              type="button"
              onClick={() => window.location.reload()}>
              Play again
            </button>
          )} */}
        </div>
      ))}
    </>
  )
}

const TextBackground = styled.div`
background-color: rgb(255, 255, 255, 0.5);
`
