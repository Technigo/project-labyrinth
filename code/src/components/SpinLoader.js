import React from 'react'
import { useSelector } from 'react-redux'

const SpinLoader = () => {
  const isLoading = useSelector((store) => store.loader.isLoading)
  return <>{isLoading}</>
}

export default SpinLoader
