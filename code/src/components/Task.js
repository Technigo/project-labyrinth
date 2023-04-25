import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Joke = () => {
  const joke = useSelector((store) => store.jokes)
  console.log('global state joke', joke)

  return <div>This is the jooke</div>;
}

export default Joke;

// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const Joke = () => {
//   const joke = useSelector((store) => store.jokes)
//   console.log('global state joke', joke)

//   return <div>
//     <p>{joke.type}</p>
//     <p>{joke.setup}</p>
//     <p>{joke.delivery}</p>
//   </div>;
// }

// export default Joke;

// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const Joke = () => {
//   const joke = useSelector((store) => store.jokes)
//   console.log('global state joke', joke)

//   const gameActions = useSelector((store) => store.game.actions)

//   return <div>
//     <p>{joke.type}</p>
//     <p>{joke.setup}</p>
//     <p>{joke.delivery}</p>

//     {gameActions.map(item =>
//       <div>
//         <p>{item.description}</p>
//         <button onClick={dispatch()}>{item.direction}</button>
//       </div>
//     }
//   </div>;
// }

// export default Joke;
