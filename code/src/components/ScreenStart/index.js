/* eslint-disable no-console */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHeroName } from 'store/game';
import { callAPI } from 'store/thunks';

import { TypoTitle, TypoText } from 'components/Typography';
import Input from 'components/InputText';
import Section from 'components/Section';
import Button from 'components/Button';

export default () => {
  const dispatch = useDispatch();
  const userid = useSelector((store) => store.game.user.id);
  const heroname = useSelector((store) => store.game.user.name);
  const [value, setValue] = React.useState('');

  const handleStartGame = () => {
    dispatch(setHeroName(value));
    dispatch(callAPI('start', { username: userid }));
  };

  return (
    <Section>
      <TypoTitle>Welcome!</TypoTitle>
      <TypoText>Are you ready for this....???</TypoText>
      <Input
        type="text"
        placeholder={heroname}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <Button type="button" onClick={() => handleStartGame()}>
        Start Game
      </Button>
    </Section>
  );
};
