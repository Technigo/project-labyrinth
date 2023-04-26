/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

export const Labyrinth = () => {
  const position = useSelector((store) => store.labyrinth.currentPosition);
  // Took away .coordinates from the useSelector and instead linked it directly to the reducer
  // We use object destructuring to get the username, description, and coordinates from the store, I COMPLETELY STOLE this.
  return (
    <>
      <p> HEJ HEJ!!</p>
      <p>{position.username}</p>
      <p>{position.description}</p>
      <p>{position.coordinates}</p>
      {/* The only thing above that renders as it should is the username and the coordinates.' */}
      {/* <div>
        {position.action.map((move, index) => (
          <button key={index} type="button">{move.direction}</button>
        ))}
        </div> */}

    </>
  )
}

