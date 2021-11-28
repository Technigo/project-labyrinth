import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie'
import animationData from '../lib/loader.json'

export const BatLoader = () => {
    const loading = useSelector(store => store.labyrinth.loading)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }
    
      return (
        <>
          {loading  && 
          (<Lottie 
          options={defaultOptions} 
          style={{ height:600, width:600 }}/> 
          )}
        </>
      )
    }
