import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from 'components/GameBoard';
import UsernameInput from 'components/UsernameInput';
import styled from 'styled-components/macro'
import GameTitleImg from '../assets/game-title.png'
import { OuterWrapper, InnerWrapper } from '../utils/GlobalStyle'

const StartScreen = () => {
  const username = useSelector((store) => store.game.username);

  return (
    <OuterWrapper>
      <InnerWrapper>
        <StartSection>
          <BewareText>ꌩꂦꀎ ꍏꋪꍟ ꈤꂦꅏ ꍟꈤ꓄ꍟꋪꀤꈤꁅ ꓄ꃅꍟ ꒒ꍏꌃꌩꋪꀤꈤ꓄ꃅ ꌗꂦ ꌃꍟꅏꍏꋪꍟ ꍏꈤꀸ ꓄ꋪꍟꍏꀸ ꉓꍏꋪꍟꎇꀎ꒒꒒ꌩ</BewareText>
          <GameTitle>The Labyrinth</GameTitle>
          <div>{username ? <GameBoard /> : <UsernameInput />}</div>
        </StartSection>
      </InnerWrapper>
    </OuterWrapper>

  )
};

export default StartScreen;

const StartSection = styled.section`
text-align: center;
`;

const BewareText = styled.p`
font-size: 200%;
margin: 8%;
`;

const GameTitle = styled.h1`
font-size: 500%;
/* background-image: url(${GameTitleImg});
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
width: 20%;
height: 20%; */

`;