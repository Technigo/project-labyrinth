import React from 'react';
import { useSelector } from 'react-redux';

export const Loader = () => {
    const isLoading = useSelector(store => store.game.isLoading)
    return (
        isLoading && ( 
            <h4>LOADING LOADING...!</h4>
        )
    )
}
