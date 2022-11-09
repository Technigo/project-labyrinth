import React from 'react'
import { useSelector } from 'react-redux'

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  return (
    <div>{isLoading && <div>!! Loading !!</div>}</div>
  )
}

export default LoadingIndicator
