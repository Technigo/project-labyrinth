/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from 'components/GameBoard';
import UsernameInput from 'components/UsernameInput';
import styled from 'styled-components/macro';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { OuterWrapper, InnerWrapper } from '../utils/GlobalStyle';
import GameTitleImg from '../assets/game-title.png';

const Main = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const username = useSelector((store) => store.game.username);

  return (
    <OuterWrapper>
      <InnerWrapper>
        {isLoading ? (
          <LoadingIndicator />
        ) : username ? (
          <GameBoard />
        ) : (
          <StartSection>
            <BewareText>
              ꌩꂦꀎ ꍏꋪꍟ ꈤꂦꅏ ꍟꈤ꓄ꍟꋪꀤꈤꁅ ꓄ꃅꍟ ꒒ꍏꌃꌩꋪꀤꈤ꓄ꃅ
              ꌗꂦ ꌃꍟꅏꍏꋪꍟ ꍏꈤꀸ ꓄ꋪꍟꍏꀸ ꉓꍏꋪꍟꎇꀎ꒒꒒ꌩ
            </BewareText>
            <GameTitle>The Labyrinth</GameTitle>
            <UsernameInput />
          </StartSection>
        )}
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Main;

const StartSection = styled.section`
  text-align: center;
`;

const BewareText = styled.p`
  margin: 0;
  font-size: 200%;
  padding: 7%;
`;

const GameTitle = styled.h1`
  font-size: 500%;
  margin: 0 0 7%;
  /* background-image: url(${GameTitleImg});
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
width: 20%;
height: 20%; */
`;
