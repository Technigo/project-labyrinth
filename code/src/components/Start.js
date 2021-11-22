import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchStart } from "reducers/start";


export const Start = () => {
    // const direction = useSelector((store) => store.direction.startPoint)
    const dispatch = useDispatch()

    return (
        <div>
            <button type='button' onClick={() => dispatch(fetchStart())}>
                Don't get lost! Good luck!
            </button>

        </div>

    )
}