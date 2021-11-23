import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import Page from './Page'

const Main = () => {

    const loadingState = useSelector((store) => store.ui.isLoading)

    return (
        <>
            {loadingState === true && <Loading />}
            {loadingState === false && <Page />}
        </>
    )

}

export default Main