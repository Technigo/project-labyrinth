import React from 'react'

import LoadingSpinner from './LoadingSpinner'
import NeonCat from './NeonCat'

const LoadingScreen = () => {
  return (
    <section className="loading-section">
      <NeonCat />
      <LoadingSpinner />
    </section>
  )
}

export default LoadingScreen