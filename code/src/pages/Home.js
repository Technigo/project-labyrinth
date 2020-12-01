import React from 'react';
import { useSelector } from 'react-redux';

import { LoadingPage } from 'pages/LoadingPage';
import { CreateUsernamePage } from 'pages/CreateUsernamePage';

export const Home = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading ? <LoadingPage /> : <CreateUsernamePage />}
    </>
  );
};

// Depending on whether the isLoading status is true or false, the
// Loading Page will show, otherwise it will show the other pages 
// according to the game status (how far the user has come in the game)

// Flow: Home > CreateUsernamePage > StartGamePage > InGamePage
