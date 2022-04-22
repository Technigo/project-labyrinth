import React from 'react'
import { useSelector } from 'react-redux'

export const Spinner = require('react-spinkit')

const SpinLoader = () => {
  const isLoading = useSelector((store) => store.loader.isLoading)
  return isLoading && <Spinner name="pacman" color="coral" />
}
export default SpinLoader
