import React from 'react'
import { useSelector } from 'react-redux'

import WelcomePage from 'components/WelcomePage'
import Description from 'components/Description'

import Loader from 'components/Loader'

import firstStep from '../assets/first-step.jpeg'
import brighter from '../assets/rays-of-light.jpeg'
import mechanical from '../assets/mechanical-room.jpeg'
import melody from '../assets/music-wall.jpeg'
//import bookshelves from '../assets/library-room.jpeg'
import ended from '../assets/last-step.jpeg'
import { combineReducers } from 'redux'

const Container = () => {
  const loading = useSelector(store => store.games.loading)
  //const description = useSelector(store => store.games.description.description)
  const coordinates = useSelector(store => store.games.description.coordinates)
  console.log(coordinates)

  /* const test = description

  const archway = test.includes("archway");
  const brighter = test.includes("brighter")
  const mechanical = test.includes("mechanical")
  const melody = test.includes("melody")
  const bookshelves = test.includes("bookshelves")
  const ended = test.includes("ended")
  console.log(ended)

  if(archway) {

    <div className="game-wrapper" style={{backgroundImage: `url(${onBackgroundImageChange()})`}}
    
  } */

  const onBackgroundImageChange = () => {
    if(coordinates === '0,0') {
      return firstStep
    } else if (coordinates === '1,0') {
        return brighter
    } else if (coordinates === '1,1') {
        return mechanical //fel
    } else if (coordinates === '0,1') {
        return mechanical
    } else if (coordinates === '0,2') {
        return melody
    } else if (coordinates === '0,3') {
        return ended
    }
  }

  return (
    <main className="main">
      {loading ? <Loader /> :
      <section className="section">
        <div className="game-wrapper" style={{backgroundImage: `url(${onBackgroundImageChange()})`}}>
          <WelcomePage /> 
          <Description /> 
        </div>
      </section>
      }
    </main>
  )

  /* if(archway1) {
  return (
    <main className="main">
      {loading ? <Loader /> :
      <section className="section">
        <div className="archway">
          <WelcomePage /> 
          <Description /> 
        </div>
      </section>
      }
    </main>
  )
  } else if (brighter){
    return (
      <main className="main">
        {loading ? <Loader /> :
        <section className="section">
          <div className="brighter">
            <WelcomePage /> 
            <Description /> 
          </div>
        </section>
        }
      </main>
    )
  } else if (mechanical){
    return (
      <main className="main">
        {loading ? <Loader /> :
        <section className="section">
          <div className="mechanical">
            <WelcomePage /> 
            <Description /> 
          </div>
        </section>
        }
      </main>
    )
  } else if (melody){
    return (
      <main className="main">
        {loading ? <Loader /> :
        <section className="section">
          <div className="melody">
            <WelcomePage /> 
            <Description /> 
          </div>
        </section>
        }
      </main>
    )
  } else if (bookshelves){
    return (
      <main className="main">
        {loading ? <Loader /> :
        <section className="section">
          <div className="bookshelves">
            <WelcomePage /> 
            <Description /> 
          </div>
        </section>
        }
      </main>
    )
  } else if (ended){
    return (
      <main className="main">
        {loading ? <Loader /> :
        <section className="section">
          <div className="ended">
            <WelcomePage /> 
            <Description /> 
          </div>
        </section>
        }
      </main>
    )
  } */
}

export default Container