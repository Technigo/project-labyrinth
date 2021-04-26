import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux' 
import { fetchNext } from 'reducers/game'


export const LoadingIndicator = () => {
    const isLoading = useSelector((store) => store.ui.isLoading)

    return (
        <>
            {isLoading && <div> <p>Loading!!!</p> </div>}
        </>
    )

}