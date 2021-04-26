import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import games, {  } from 'reducers/games';

const Description = () => {
  const ourDescription = useSelector(store => store.games.description)
  
  //const dispatch = useDispatch()


  return (
    <p>{ourDescription.description}</p>
  )
}