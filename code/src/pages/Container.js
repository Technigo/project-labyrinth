import React from 'react'

import WelcomePage from 'components/WelcomePage'
import Description from 'components/Description'

const Container = () => {
  return (
    <main className="main">
      <div className="game-wrapper">
        <WelcomePage /> 
        <Description />
      </div>
    </main>
  )
}

export default Container