import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restartGame } from 'store/game';

import { TypoText } from 'components/Typography';
import Section from 'components/Section';
import Button from 'components/Button';

export default () => {
  const username = useSelector((store) => store.game.name);
  const dispatch = useDispatch();

  return (
    <Section>
      <TypoText>Congrats {username}! You made it out.</TypoText>
      <Button onClick={() => dispatch(restartGame())}>Play Again</Button>
    </Section>
  );
};
