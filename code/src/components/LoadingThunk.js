import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
    const isLoading = useSelector((store) => store.ui.isLoading);

    return ( 
        <> 
            {isLoading && <div>"Finding path"</div>}
        </>
    );
};