/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <div>
      {isLoading && <h1>loading</h1>}
    </div>
  )
}

export default Loading;