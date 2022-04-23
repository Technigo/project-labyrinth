import React from 'react'
import { useSelector } from 'react-redux'

const Spinner = require('react-spinkit')

export const Loading = () => {
  const isLoading = useSelector((store) => store.loader.isLoading)

  return (
    isLoading && (
      <>
        <div>
          <Spinner name="pacman" color="black" />
        </div>
      </>
    )
  )
}
