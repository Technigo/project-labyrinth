import React from 'react';
import { useSelector } from 'react-redux';

import { LoadingPage } from './LoadingPage';
import { CreatePlayer} from './CreatePlayer';

export const HomePage = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading ? <LoadingPage /> : <CreatePlayer/>}
    </>
  );
};
