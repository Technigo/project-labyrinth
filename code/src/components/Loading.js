import React from 'react';
import { useSelector } from 'react-redux';
import Animation from 'components/Animation';

const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    isLoading && (
      <div>
        <p>Loading..</p>/
        <Animation />
      </div>
    )
  );
};

export default Loading;
