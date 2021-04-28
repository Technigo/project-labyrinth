import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setState } from 'store/game';

import { TypoText } from 'components/Typography';
import Section from 'components/Section';
import Button from 'components/Button';

export default () => {
  const username = useSelector((store) => store.game.name);
  const dispatch = useDispatch();

  return (
    <Section>
      <TypoText>Congrats {username}! You made it out.</TypoText>
      <Button onClick={() => dispatch(setState('Start'))}>Play Again</Button>
    </Section>
  );
};
