import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit"; // createStore
import { startSlice } from "./reducers/startSlice";
import { moveSlice } from "./reducers/moveSlice";
import { Start } from "./components/Start";
import { Move } from "./components/Move";

const reducer = combineReducers({
	startSlice: startSlice.reducer,
	moveSlice: moveSlice.reducer,
});
const store = configureStore({ reducer });

// const persistedStateJSON = localStorage.getItem("gameReduxState");
// let persistedState = {};

// if (persistedStateJSON) {
// 	persistedState = JSON.parse(persistedStateJSON);
// }

// const store = createStore(
// 	reducer,
// 	persistedState,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe(() => {
// 	localStorage.setItem("gameReduxState", JSON.stringify(store.getState()));
// });

export const App = () => {
	return (
		<Provider store={store}>
			<Start />
			<Move />
		</Provider>
	);
};
