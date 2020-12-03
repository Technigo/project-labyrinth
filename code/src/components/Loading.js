import React from 'react';
import { useSelector } from 'react-redux';

import { Centered } from '../lib/Styling';

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <Centered>Loading!!</Centered>}
    </>
  )
}