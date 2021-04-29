import React from 'react'
import { useSelector } from 'react-redux'

import SpinningLoader from './SpinningLoader'

const LoadingIndicator = () => {
    const isLoading = useSelector((store) => store.ui.isLoading)

    return (
        <>
        {isLoading && <SpinningLoader />}
        </>
    )
}

export default LoadingIndicator 
