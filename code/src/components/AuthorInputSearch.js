import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { generateQuote } from 'reducers/labyrinth';

const AuthorInputSearch = () => {
  const [authorNameInputValue, setAuthorNameInputValue] = useState('');
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.quotes.author);
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(labyrinth.actions.setAuthor(authorNameInputValue));
    dispatch(generateQuote());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input">
      Provide author name, please:
        <input id="author-input" type="text" onChange={(event) => setAuthorNameInputValue(event.target.value)} />
      </label>
      <button type="submit">search for quotes</button>
    </form>)
}

export default AuthorInputSearch;