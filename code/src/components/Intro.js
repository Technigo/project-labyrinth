import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"

export const Intro = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(maze.action.setUserName(userName));
        setInput(""); //clears the input
    }


    return (
        <div>
            <input
            type="text" 
            value={userName}
            placeholder="Type your name here ..."
            onChange={(e) => setInput(e.target.value)}
            />

            <button type='submit'
            onClick={ onSubmit}>
            start the game
            </button>



        </div>


    )


}


