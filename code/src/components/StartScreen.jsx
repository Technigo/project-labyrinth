import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import directions , { generateDirection } from '../reducers/directions';

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onUsernameSet = () => {
        dispatch(directions.actions.setUsername(inputValue));
        dispatch(generateDirection);
    };

    return (
        <div>
            <p>Welcome to Labyrinth Game! Please type your gamertag</p>
            <input
                type='text'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button onClick={onUsernameSet}>Start the game!</button>
        </div>
    );
};

export default StartScreen;


//More accessible semantics?
{/* <form>
<label onSubmit={onFormSubmit}>
    <input
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
    />
</label>
<button
    type='submit'
    onClick={onUsernamSet}
    >
        Start the game!
</button>
</form> */}

  // const onFormSubmit = (event) => {
    //     event.preventDefault();
    // }