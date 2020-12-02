import React from 'react'
import { useSelector } from 'react-redux'

import { LoadingSpinner } from '../lib/LoadingSpinner'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <>
    {isLoading && <LoadingSpinner />}
    </>
  )

}