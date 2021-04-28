import React from 'react'
import { useSelector } from 'react-redux'

import BouncingLoader from './BouncingLoader'

const LoadingIndicator = () => {
    const isLoading = useSelector((store) => store.ui.isLoading)

    return (
        <>
        {isLoading && <BouncingLoader background='blue' />}
        </>
    )
}

export default LoadingIndicator 
