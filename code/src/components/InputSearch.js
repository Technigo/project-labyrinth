import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import jokes, { getJoke } from 'reducers/tasks';

const AuthorInputSearch = () => {
  const [authorNameInputValue, setAuthorNameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(jokes.actions.setCategory(authorNameInputValue));
    dispatch(getJoke());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input">
      Provide a category, please:
        <input id="author-input" type="text" onChange={(event) => setAuthorNameInputValue(event.target.value)} />
      </label>
      <button type="submit">get joke</button>
    </form>)
}

export default AuthorInputSearch;