import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import Start from 'components/ScreenStart';
import Room from 'components/ScreenRoom';
import End from 'components/ScreenEnd';

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
    default:
      return <div>Found no screen to render</div>;
  }
};

export default () => {
  const gameState = useSelector((store) => store.game.state);

  return <Main>{renderScreenSwitch(gameState)}</Main>;
};
