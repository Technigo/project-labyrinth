/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Thunk, choices } from 'reducers/choices';
import { useDispatch } from 'react-redux';

export const Start = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [startConfirmed, setStartConfirmed] = useState(false)

  const onFormSubmit = (event) => {
    event.preventDefault()
  }

  // Function for storing user's text
  const handleChange = (event) => {
    setUserName(event.target.value);
    dispatch(choices.actions.addUserName(userName))
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
            type="submit"
            onClick={() => setStartConfirmed(true)}>
            Submit
          </button>
        </form>
      )}
      {startConfirmed && (
        <h2>Welcome {userName}</h2>
      )}
    </section>
  )
  /* <h2>{questions.description}</h2> */
  /* {questions.map((q) => {
        return (
          <div key={questions.indexOf(q)}>
            <div className="container">
              <h1>Type: {q.type}</h1>
              <h2>Direction: {q.direction}</h2>
              <h3>Description: {q.description}</h3>
            </div>
          </div>
        )
      })} */
}