import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
    const loading = useSelector(state => state.games.loading)
    return (
        <p>{loading}</p>
    )
}

export default Loading