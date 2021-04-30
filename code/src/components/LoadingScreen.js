import React from 'react'

import LoadingSpinner from './LoadingSpinner'
import NeonCat from './NeonCat'

const LoadingScreen = () => {
  return (
    <section className="nes-container loading-section">
      <p>loading...</p>
      <NeonCat />
      <LoadingSpinner />
    </section>
  )
}

export default LoadingScreen