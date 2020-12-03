import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoading = useSelector((store)=>store.loader.isLoading)

  return (
    <>
      {isLoading && 
        <div className="loader">
        Loading...
        </div>}
    </>
  )
}