import React from 'react'
import { useSelector } from 'react-redux'

import WelcomePage from 'components/WelcomePage'
import Description from 'components/Description'
import MovieHistory from 'components/MoveHistory'
import Loader from 'components/Loader'


const Container = () => {
  const loading = useSelector(store => store.games.loading)

  return (
    <main className="main">
      {loading ? <Loader /> :
      <section className="section">
        <div className="game-wrapper">
          <WelcomePage /> 
          <Description />
          <MovieHistory />
        </div>
      </section>
      }
    </main>
  )
}

export default Container