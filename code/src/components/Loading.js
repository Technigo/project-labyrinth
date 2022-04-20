import React from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);

  return isLoading && <div>Loading..</div>;
};

export default Loading;
