import React from 'react';
import { useSelector } from 'react-redux';

import { FetchLabyrinthButton } from './FetchLabyrinthButton';


export const LabyrinthGame = () => {
  const description = useSelector((store) => store.labyrinth.description);
  const loading = useSelector((state) => state.ui.loading);


  return (
      <section>
            <FetchLabyrinthButton />
      </section>
    )
};


