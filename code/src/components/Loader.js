import React from 'react'
import { useSelector } from 'react-redux'

const Loader = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    isLoading && (
      <div>!! Loading !!</div>
    )
  )
}

export default Loader
