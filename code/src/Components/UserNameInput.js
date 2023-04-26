import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { getLabyrinth } from 'reducers/labyrinth';


const UserNameInput = () => {
    const [userNameInputValue, setUserNameInputValue] = useState('');
    const dispatch = useDispatch();
   
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        dispatch(labyrinth.actions.setUserName(userNameInputValue));
        dispatch(getLabyrinth(userNameInputValue));
    }

    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <label htmlFor="name-input">
                Provide a user name
                <input required id="name-input" type="text" onChange={(event) => setUserNameInputValue(event)}></input>
            </label>
            <button type="submit">START GAME</button>
        </form>
    )
}

export default UserNameInput