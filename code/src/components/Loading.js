import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
    const loading = useSelector((state) => state.ui.loading)

    return(
        loading === true && (
            <div>
                This is loading...
            </div>
        )
    )
}