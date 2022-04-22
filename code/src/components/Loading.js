import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {

    const loading = useSelector((state) => state.ui.loading)
    return(
        <>
        {loading && (
            <div>Loading...</div>
        )}
        </>
            
        )
}

export default Loading