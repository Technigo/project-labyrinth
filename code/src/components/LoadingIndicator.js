/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return isLoading && <div>LOADING....</div>
}