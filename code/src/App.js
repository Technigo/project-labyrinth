import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import MoveContainer from "components/MoveContainer"
import MoveControls from "components/MoveControls"
import { moves } from "./reducers/moves"

const reducer = combineReducers ({ moves: moves.reducer })
const store = configureStore ({ reducer })

export const App = () => {
    return (
        <Provider store={store}>
            <MoveControls/>
            <MoveContainer/>
        </Provider>
    )
}
