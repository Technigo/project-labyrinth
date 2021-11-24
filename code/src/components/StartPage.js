import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart } from 'reducers/description';

export const StartPage = () => {
  const labyrinth = useSelector(
    (store) => store.labyrinth.labyrinthDescription
  );
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hej knapp 👇</h1>
      <h1>Hej knapp 👇</h1>
      <button
        onClick={() => {
          dispatch(fetchStart());
        }}>
        🗿
      </button>

      {labyrinth?.actions?.map((item) => (
        <p key={item.description}>{item.description}</p>
      ))}
      {labyrinth?.actions?.map((item) => (
        <button
          key={item.direction}
          onClick={() => {
            dispatch();
          }}>
          {item.direction}
        </button>
      ))}
    </>
  );
};
