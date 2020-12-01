import React from 'react';
import { useSelector } from 'react-redux';


export const GameLoading = () => {
  const loading = useSelector((state) => state.ui.loading);

  return loading === true && <p>Loading</p>;
};