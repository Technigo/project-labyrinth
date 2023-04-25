import React, { useState } from 'react';
import { gameFetch, fetchOne } from 'reducers/gameFetch';
import { useDispatch } from 'react-redux';

export const StarterPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmitUserName = (event) => {
    event.preventDefault();
    dispatch(gameFetch.actions.setName(userName));
    dispatch(fetchOne());
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <h1>Hello, {userName}!</h1>
      ) : (
        <form onSubmit={onSubmitUserName}>
          <label htmlFor={userName}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

/* 1. en sida för input name(startsidan)
2. vi börjar med att se till att fetchen funkar på vår sida
3. en sida där själva spelet kommer fortgå(spelsidan)
4. knappar så en kan välja vilken väg en ska ta
5. lägga rätt fetch på rätt plats */
