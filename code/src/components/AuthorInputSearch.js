import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import quotes, { generateQuote } from 'reducers/quotes'

const AuthorInputSearch = () => {
  const [authorNameInputValue, setauthorNameInputValue] = useState('')
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.quotes.author)

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(quotes.actions.setAuthor(authorNameInputValue));
    dispatch(generateQuote());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input"> Provide author name, please
        <input id="author-input" type="text" onChange={(event) => setauthorNameInputValue(event.target.value)} />
      </label>
      <button type="submit">search quotes</button>
    </form>
  )
}
export default AuthorInputSearch;