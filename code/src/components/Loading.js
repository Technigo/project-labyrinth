import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
    const loading = useSelector(state => state.games.loading)
    return (
    
        <div>{loading && 
        <p>loading</p>
        }</div>
    )
}

export default Loading