import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import StartPage from './StartPage'

const Main = () => {

    const loadingState = useSelector((store) => store.ui.isLoading)

    return (
        <div>
            {loadingState === true && <Loading />}
            {loadingState === false && <StartPage />}
        </div>
    )

}

export default Main