/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';

export const GamePlay = () => {
  const story = useSelector((store) => store.game.position.description)
  console.log(story)

  const direction = useSelector((store) => store.game.position.actions)
  console.log(direction)
  return (
    <>
      <p>{story}</p>
      {direction.map((item) => {
        return <button type="button">Go {item.direction}</button>
      })}
    </>
  )
}