import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { fetchStartPosition } from 'reducers/game';

const AuthorInputSearch = () => {
  const [authorNameInputValue, setAuthorNameInputValue] = useState('');
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.game.author);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(game.actions.setAuthor(authorNameInputValue));
    dispatch(fetchStartPosition());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input">
      Provide author name, please:
        <input id="author-input" type="text" onChange={(event) => setAuthorNameInputValue(event.target.value)} />
      </label>
      <button type="submit">Search for quotes</button>
    </form>)
}

export default AuthorInputSearch;