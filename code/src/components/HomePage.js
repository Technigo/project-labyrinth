import React from 'react';
import { useSelector } from 'react-redux';

import { LoadingPage } from './LoadingPage';
import { CreatePlayer} from './CreatePlayer';

// if the page is loading it mounts the loading page component, otherwise, 
// the CreatePlayer component gets mounted instead. Since the CreatePlayer only is mounted if 
// there's NO username stored in the global state we can use this to condinitially render it or not.
// If there's a username stored in the global state then the game will re-start from the last coordinates the player was at. 

export const HomePage = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading ? <LoadingPage /> : <CreatePlayer/>}
    </>
  );
};

//Flow Map: 
// HomePage > CreatePlayer 
