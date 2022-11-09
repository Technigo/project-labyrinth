// const loading and something moving around maybe

import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)
  return (
    <div>
      {isLoading && <p>PAGE LOADING</p>}
    </div>
  )
}