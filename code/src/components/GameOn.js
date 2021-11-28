import React from 'react'
import { useSelector } from 'react-redux'
import { BatLoader } from './BatLoader'

import { StartPage } from './StartPage'
import { TheLabyrinth } from './TheLabyrinth'
import { LoaderContainer } from 'lib/styling'
import { LoadingText } from 'lib/styling'

export const GameOn = () => {
  const loading = useSelector(store => store.labyrinth.loading);
  const currentPosition = useSelector(store => store.labyrinth.currentPosition)

  return (
<>
  {loading && (
    <LoaderContainer>
      <BatLoader />
      <LoadingText>LOADING...</LoadingText>
    </LoaderContainer>
  )}
  {!loading && (
      <>{currentPosition ? <TheLabyrinth /> : <StartPage />}</>
  )}
</>
)
}
