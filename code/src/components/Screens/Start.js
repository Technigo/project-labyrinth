import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHeroName } from 'store/game';
import { callAPI } from 'store/thunks';
import { TypoTitle, TypoText } from 'components/reusables/Typography';
import Input from 'components/reusables/InputText';
import Section from 'components/reusables/Section';
import Button from 'components/reusables/Button';

export default () => {
  const dispatch = useDispatch();
  const userid = useSelector((store) => store.game.user.id);
  const heroname = useSelector((store) => store.game.user.name);
  const [value, setValue] = React.useState('');

  const handleStartGame = () => {
    dispatch(setHeroName(value || heroname));
    dispatch(callAPI('start', { username: userid }));
  };

  return (
    <Section>
      <TypoTitle>Welcome!</TypoTitle>
      <TypoText>What is your hero name?</TypoText>
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
