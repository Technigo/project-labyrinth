/* eslint-disable linebreak-style */
import React from 'react';
import { NotFound } from './NotFound';
/* import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; */
import StartPage from './StartPage';
import { Provider } from 'react-redux';
import { game } from '../reducers/store';
import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import { Loading } from './Loading'

const reducer = combineReducers({
    game: game.reducer
})
const store = configureStore({ reducer })

const Wrapper = () => {
    
    return (
        <Provider store={store}>
            <StartPage />
            <NotFound />
            <Loading />
    </Provider>
    
     
    )
}

export default Wrapper

