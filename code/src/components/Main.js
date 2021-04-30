import React from 'react';
import { useSelector } from 'react-redux';

import { LoadingIndicator } from 'components/LoadingIndicator';
import { GamePage } from 'components/GamePage';

export const Main = () => {
  const loading = useSelector((store) => store.ui.loading);
  console.log(loading);
  return (
    <>
      {loading && <LoadingIndicator />}
      {!loading && <GamePage />}
    </>
  );
};
