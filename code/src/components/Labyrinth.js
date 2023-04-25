/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

export const Labyrinth = () => {
  const { username, description, coordinates, actions } = useSelector((store) => store.labyrinth.coordinates);
  // We use object destructuring to get the username, description, and coordinates from the store, I COMPLETELY STOLE this.
  return (
    <>
      <p> HEJ HEJ!!</p>
      <p>{username}</p>
      <p>{description}</p>
      <p>{coordinates}</p>
      <p>{actions}</p>
      {/* The only thing above that renders as it should is the username and the coordinates.' */}
    </>
  )
}