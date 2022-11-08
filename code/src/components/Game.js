import React from "react";
import { useSelector } from "react-redux";

//This code daniel put in his start page, but i think its gonna go here 
const Game = () => {
    const something = useSelector((store) => store.something.something)
    return (
    <p>{something === '' ? <AuthorInputSearch /> : <Something />}</p>
    // checking if the quote is equal to an empty '' string. Then Author... otherwide Something. 
    // (username or currentPosition (or history?))
    )
}


export default Game