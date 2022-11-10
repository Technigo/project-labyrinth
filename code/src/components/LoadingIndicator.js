import React from 'react';
import { useSelector } from 'react-redux';

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.game.isLoading);

  return <>{isLoading && <p> LOADING... </p>}</>;
};

export default LoadingIndicator;
