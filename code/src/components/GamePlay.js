/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextMove } from 'reducers/game';

export const GamePlay = () => {
  const story = useSelector((store) => store.game.position.description)
  console.log(story)
  const dispatch = useDispatch()

  const onButtonClick = (direction) => {
    dispatch(nextMove(direction))
  }

  const direction = useSelector((store) => store.game.position.actions)
  console.log(direction)
  return (
    <>
      <p>{story}</p>
      {direction.map((item) => {
        return <button type="button" onClick={() => onButtonClick(item.direction)}>Go {item.direction}</button>
      })}
    </>
  )
}