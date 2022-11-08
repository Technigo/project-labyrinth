import React from 'react';
import { NotFound } from './NotFound';
/* import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; */
import StartPage from './StartPage';
import { Provider } from 'react-redux';
import { game } from '../reducers/store';
import { combineReducers, configureStore  } from '@reduxjs/toolkit';

const reducer = combineReducers({
    game: game.reducer
})
const store = configureStore({ reducer })

const Wrapper = () => {
    
    return (
        <Provider store={store}>
            <StartPage />
            <NotFound />
    </Provider>
     
    )
}

export default Wrapper

{/* <BrowserRouter>
<Routes>
    <Route path="/" element={<StartPage/>} />
    <Route path="/404" element={<NotFound />} />
    {/* <Route path="*" element={<Navigate to= "/404" />} /> 
</Routes>
</BrowserRouter> */}