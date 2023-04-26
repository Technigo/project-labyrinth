import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Joke = () => {
  const joke = useSelector((store) => store.jokes)

// gameActions within an object. map through the actions. 

  return (
    <div>
      This is the joke
      <p>{joke.type}</p>
      <p>{joke.setup}</p>
      <p>{joke.delivery}</p>      
    </div>
  )
}

export default Joke;

// end coordinates:'1,3' actions array is empty = the end.