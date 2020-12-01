import React from 'react';
import { useSelector } from 'react-redux';
import { Circular } from 'styled-loaders-react';

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return isLoading === true && <Circular color="#000" size="80px" />;
};
