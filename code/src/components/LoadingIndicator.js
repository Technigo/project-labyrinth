import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from 'react-loader-spinner'

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <Grid ariaLabel="loading-indicator" />}
    </>
  )
}

export default LoadingIndicator