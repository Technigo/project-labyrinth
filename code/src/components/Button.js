import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMaze } from "reducers/maze";
import { maze } from "reducers/maze";

export const Button = () => {
    const userName = useSelector((store) => store.maze.userName);
    const dispatch = useDispatch();


    return (
        <button type="submit" onClick={ () => dispatch(fetchMaze(userName))}>
            Fetch 1
        </button>
    )

}