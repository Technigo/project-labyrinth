import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
  const isLoading = useSelector((store) => store.labyrinth.loading)
  return (
    <div>
      {isLoading && <p>PAGE LOADING</p>}
    </div>
  )
}