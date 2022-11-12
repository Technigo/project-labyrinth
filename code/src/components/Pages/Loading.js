/* eslint-disable linebreak-style */
import React from 'react'
import { GameWrapper } from 'components/Styles/Globalstyles';
import { Pulsar } from '@uiball/loaders'

export const Loading = () => {
  return (
    <GameWrapper bgColor="transparent">
      <Pulsar
        size={100}
        speed={1.75}
        color="white" />
    </GameWrapper>
  )
};

