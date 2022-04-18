import React, { useState } from 'react';

import quotes, { generateQuote } from '../reducers/quotes';
import { useDispatch } from 'react-redux';

const StartPage  = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onAuthorSet = () => {
        dispatch(quotes.actions.setAuthor(inputValue));
        dispatch(generateQuote());
    }

    return (
        <div>
            <p>Welcome to Labyrinth! Please enter your name: </p>
            <input
                type='text'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button onClick={onAuthorSet}>Let's begin!</button>
        </div>
    )
}

export default StartPage;