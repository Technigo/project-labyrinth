import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from 'react-loader-spinner'

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <div className='loader'>
      {isLoading && <Grid ariaLabel="loading-indicator" />}
    </div>
  );
};

export default LoadingIndicator;