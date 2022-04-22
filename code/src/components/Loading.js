import React from 'react';
import { useSelector } from 'react-redux';

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>{isLoading && <div className="loading-container">!! Loading !!</div>}</>
  );
};
