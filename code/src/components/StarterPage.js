import React, { useState } from 'react'
import { gameFetch, fetchOne } from 'reducers/gameFetch'
import { useDispatch } from 'react-redux'

export const StarterPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const onSubmitUserName = (event) => {
    event.preventDefault();
    console.log(userName);
    dispatch(gameFetch.actions.setName(userName))
    dispatch(fetchOne())
    /* dispatch(fetchOne({ username: userName })); */
  }

  return (

    <form onSubmit={onSubmitUserName}>
      <label htmlFor={userName}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)} />
      </label>
      <button
        type="submit">
        submit
      </button>
    </form>

  )
}

/* 1. en sida för input name(startsidan)
2. vi börjar med att se till att fetchen funkar på vår sida
3. en sida där själva spelet kommer fortgå(spelsidan)
4. knappar så en kan välja vilken väg en ska ta
5. lägga rätt fetch på rätt plats */
