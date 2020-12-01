import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

export const LoadingIndicator = () =>{
    const isLoading = useSelector((state) => state.ui.isLoading); 
return (
    <>
    {isLoading &&  <CircularProgress />}
    </>
)
}