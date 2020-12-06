import React from 'react'
import { useSelector } from 'react-redux'


export const LoadingPage = () => {
    const isLoading = useSelector((store) => store.loader.isLoading);
    console.log("Inne i Loadingpage.js, isLoading är: " + isLoading)

    return ( 
        <> 
            {isLoading && <div>"Finding path"</div>}
        </>
    );
};