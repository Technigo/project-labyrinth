import React from 'react';
import { useSelector } from 'react-redux';

import { Animation } from './Animation';
import { MainContainer, Loader } from '../styled-components/Loading';

export const Loading = () => {
    const isLoading = useSelector((store) => store.ui.isLoading);

    return  (
        <MainContainer>
            {isLoading &&  
            <>           
                <Loader>Labyrinth is loading!</Loader>           
                <Animation />
            </>
            }
        </MainContainer>
    );
};