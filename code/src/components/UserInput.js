import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { startFetch } from '../reducers/reusable';

export const UserInput = () => {
    const [userNameInput, setUserNameInput] = useState("");
    const dispatch = useDispatch();
    const userName = useSelector(store => store.game.userName)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(game.actions.updateUserName(userNameInput))
        dispatch(startFetch(userNameInput))
    }


    return (
        <form>
            <label
                value='username'
            />
            <input
                type='text'
                placeholder='Type username'
                onChange={e => setUserNameInput(e.target.value)}
            />
            <button onClick={handleSubmit}> Game start</button>
        </form>
    )
}