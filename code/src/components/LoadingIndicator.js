import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)
  console.log(isLoading, 'isLoading')
  return (
    <>
      {isLoading && <div>The page is loading!!!</div>}
    </>
  )
}