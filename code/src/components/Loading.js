/* eslint-disable linebreak-style */
import React from 'react'
import { GameWrapper } from 'Globalstyles';
import { Pulsar } from '@uiball/loaders'

export const Loading = () => {
  return (
    <GameWrapper>
      <Pulsar
        size={100}
        speed={1.75}
        color="white" />
    </GameWrapper>
  )
};

