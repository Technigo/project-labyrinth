import { useState } from 'react';
import { useDispatch } from 'react-redux';
import quotes, { generateQuote } from 'features/quotes';
import { setAuthor } from 'features/quotes';

const Author = () => {
	const [authorValue, setAuthorValue] = useState('');
	const dispatch = useDispatch();
	//const author = useSelector((store) => store.quotes.author);
	const onAuthorSubmit = (e) => {
		e.preventDefault();
		dispatch(setAuthor(authorValue));
		dispatch(generateQuote());
	};

	return (
		<form onSubmit={onAuthorSubmit}>
			<input
				id="author-input"
				type="text"
				placeholder="Type Author Name"
				onChange={(e) => setAuthorValue(e.target.value)}
			/>
			<button type="submit">Search Quote</button>
		</form>
	);
};

export default Author;
