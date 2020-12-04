import React from 'react'
import { useSelector } from 'react-redux'

import { LoadingSpinner } from '../lib/LoadingSpinner'
import { LoadingContainer } from '../lib/Containers'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    // what should be the container here?
    // Cardcontainer?
    <LoadingContainer>
    {isLoading && <LoadingSpinner />}
    </LoadingContainer>
  )

}