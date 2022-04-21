import React from 'react';
import { useSelector } from 'react-redux';

export const Loader = () => {
    const isLoading = useSelector((store) => store.game.isLoading);
    
    return (
        isLoading && (
            <div>
                <h4>LOADING LOADING...!</h4>
            </div>
        )
    );
};

export default Loader;
