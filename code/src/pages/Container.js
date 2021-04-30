import React from 'react'
import { useSelector } from 'react-redux'

import WelcomePage from 'components/WelcomePage'
import Description from 'components/Description'
import Loader from 'components/Loader'

const Container = () => {
  const loading = useSelector(store => store.games.loading)
  const coordinates = useSelector(store => store.games.description.coordinates)
  
  const onBackgroundImageChange = () => {
    switch (coordinates) {
      case '0,0':
        return ("section-switch first-step")
      case '1,0':
        return ("section-switch brighter")
      case '1,1':
        return ("section-switch brighter")
      case '0,1':
        return ("section-switch mechanical")
      case '0,2':
        return ("section-switch melody")
      case '0,3':
        return ("section-switch bookshelves")
      case '1,3':
        return ("section-switch ended")
      default: 
        return ("section-switch section")
    }
  } 
  
  return (
    <main>
      {loading ? <Loader /> : 
      <section className={onBackgroundImageChange()}>
        <div className='game-wrapper'>
          <WelcomePage /> 
          <Description /> 
        </div>
      </section>
      }
    </main>
  )
}

export default Container