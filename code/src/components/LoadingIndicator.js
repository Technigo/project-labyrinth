import React from 'react';
import { useSelector } from 'react-redux';

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <div>Loading ...</div>}
    </>
  )
}

export default LoadingIndicator