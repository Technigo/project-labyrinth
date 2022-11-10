import React from 'react'
import { useSelector } from 'react-redux';

export const Spinner = () => {
  const loading = useSelector((store) => store.game.isLoading)

  return (
    loading && (
      <p>Loading...</p>
    )

  )
}

