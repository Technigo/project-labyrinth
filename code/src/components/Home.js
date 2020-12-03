import React from 'react';
import { useSelector } from 'react-redux';

import { StartGame } from './StartGame';
import { Loading } from './Loading';

export const Home = () => {
    const isLoading = useSelector((state) => state.ui.isLoading);
    return (
        (isLoading ? <Loading /> : <StartGame /> )
    );
};
