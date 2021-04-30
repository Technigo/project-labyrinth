import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import Start from 'components/Screens/Start';
import Room from 'components/Screens/Room';
import End from 'components/Screens/End';
import Loading from 'components/Screens/Loading';

const Main = styled.main`
  text-align: center;
`;

const renderScreenSwitch = (param) => {
  switch (param) {
    case 'Start':
      return <Start />;
    case 'Room':
      return <Room />;
    case 'End':
      return <End />;
    case 'Loading':
      return <Loading />;
    default:
      return <div>Found no screen to render</div>;
  }
};

export default () => {
  const gameState = useSelector((store) => store.game.user.state);

  return <Main>{renderScreenSwitch(gameState)}</Main>;
};
