import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restartGame } from 'store/game';
import { clearRoom } from 'store/room';

import { TypoText } from 'components/Typography';
import Section from 'components/Section';
import Button from 'components/Button';

export default () => {
  const username = useSelector((store) => store.game.user.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearRoom());
    dispatch(restartGame());
  };

  return (
    <Section>
      <TypoText>Congrats {username}! You made it out.</TypoText>
      <Button onClick={handleClick}>Play Again</Button>
    </Section>
  );
};
