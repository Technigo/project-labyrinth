import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { start, fetchStart } from '../reducers/start';

export const StartPage = () => {
  const [username, setUsername] = useState(''); // onödig?

  const dispatch = useDispatch();

  const onNameSet = () => {
    dispatch(start.actions.setUsername(username));
    dispatch(fetchStart(username));
  };

  // annan approach för att visa start eller labyrinten TEST/förslag
  //  const username = useSelector(store => store.start.username);
  {
    /*
  <Main>
  {username ? <Labyrinth /> : return (allt vi har här nedan)}
  </Main>
*/
  }

  {
    /* handleSubmit = (event) => {
    event.prevent.default()
  } */
  }

  return (
    <main>
      <label htmlFor='name'>Can you get through the labyrinth?</label>
      <p>Enter your name here</p>
      <div>
        {/* form? onSubmit i form, required på input */}
        <input
          id='name'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button onClick={onNameSet}>Start game</button>
      </div>
    </main>
  );
};
