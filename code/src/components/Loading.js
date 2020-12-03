import React from 'react';
import { useSelector } from 'react-redux';

import { CenteredScreen } from '../lib/Styling';

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <CenteredScreen>Loading!!</CenteredScreen>}
    </>
  )
}