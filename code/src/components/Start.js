/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { fetchChoices, choices } from 'reducers/choices';
import { useDispatch } from 'react-redux';

export const Start = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [startConfirmed, setStartConfirmed] = useState(false)

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(choices.actions.addUserName(userName))
    setStartConfirmed(true)
  }

  // Function for storing user's text
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <section>
      {!startConfirmed && (
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={userName}
            onChange={handleChange}
            placeholder="Your username" />
          <button
            type="submit">
            Submit
          </button>
        </form>
      )}
      {startConfirmed && (
        <section>
          <h2>Welcome {userName}</h2>
          <button
            type="button"
            onClick={() => dispatch(fetchChoices())}>
            Start
          </button>
        </section>
      )}
    </section>
  )
}