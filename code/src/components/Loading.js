import React from 'react'
import { useSelector } from 'react-redux'

import { ScreenContainer } from 'lib/Container'

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <>
      {isLoading && <ScreenContainer>Loading...</ScreenContainer>}
    </>
  )
}