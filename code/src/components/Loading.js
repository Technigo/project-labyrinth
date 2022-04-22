import React from 'react'
import { useSelector } from 'react-redux'

import LoaderAnimation from './animation'


const Loading = () => {
    const isLoading = useSelector((store) => store.ui.isLoading);
    
    return (

      isLoading && (
        <div>
        <LoaderAnimation/>
       </div>

      )
    )
    
}

export default Loading