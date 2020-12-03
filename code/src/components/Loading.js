import React from 'react';
import { useSelector } from 'react-redux';

import { Centred } from './Styling';

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <Centred>Loading!!</Centred>}
    </>
  )
}