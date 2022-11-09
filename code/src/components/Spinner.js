import React from 'react'
import { useSelector } from 'react-redux';

const Spinner = () => {
  const loading = useSelector((store) => store.spinner.isLoading)

  return (
    loading && (
      <p>Loading...</p>
    )

  )
}
export default Spinner

