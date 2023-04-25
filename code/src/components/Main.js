import React from 'react';
import { useSelector } from 'react-redux';
// import { maze } from 'reducers/maze';
// import { ui } from 'reducers/ui';
import { WelcomePage } from 'components/WelcomePage';
import { Loading } from 'components/Loading';
import { MazeActions } from 'components/MazeActions';

export const Main = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  return (
    <>
      <WelcomePage />
      {isLoading && (<Loading />)}
      {!isLoading && (<MazeActions />)}
    </>
  )
}