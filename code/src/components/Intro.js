import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
// import { fetchMaze } from "reducers/maze";
import { maze } from "reducers/maze";

export const Intro = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(maze.actions.setUserName(userName));
        // setUserName(""); //clears the input
    }


    return (
        <div>
            <input
            type="text" 
            value={userName}
            placeholder="Type your name here ..."
            onChange={(e) => setUserName(e.target.value)}
            />

            <button type='submit'
            onClick={ onSubmit }
            >
            Start the game
            </button>

        </div>


    )


}


