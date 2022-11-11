/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Start } from 'components/Start';

import { LabyrinthGame } from 'components/Labyrinth'
import { Loading } from './Loading';
// import { labyrinth } from 'reducers/labyrinth';

export const Gamepage = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const username = useSelector((store) => store.labyrinth.username);

  return (
    <section>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          {username
            ? <LabyrinthGame username={username} />
            : <Start />}
        </>)}
    </section>
  )
};