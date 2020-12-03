import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Home } from 'components/Home';
import { moves } from './reducers/moves';
import { ui } from './reducers/ui';
import { HeaderContainer } from './components/HeaderContainer';
import { MainBody } from './styled-components/App';

const reducer = combineReducers ({ moves: moves.reducer, ui: ui.reducer });
const store = configureStore ({ reducer: reducer });

export const App = () => {
    return (
        <Provider store={store}>
            <HeaderContainer />
            <MainBody>
                <Home />
             </MainBody>
        </Provider>
    );
};
