import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import jokes, { getJoke } from 'reducers/jokes';


const JokeInputSearch = () => {
    const [jokeInputValue, setJokeInputValue] = useState('');
    const dispatch = useDispatch();
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        dispatch(jokes.actions.setCategory(jokeInputValue));
        dispatch(getJoke());
    }

    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <label htmlFor="joke-input">
                Provide a direction
                <input id="joke-input" type="text" onChange={(event) => setJokeInputValue(event)}></input>
            </label>
            <button type="submit">get directions</button>
        </form>
    )
}
// start game button
export default JokeInputSearch