import React from 'react';
import { useDispatch } from 'react-redux';
import { setState } from 'store/game';

// import { TypoText } from 'components/Typography';
// import Input from 'components/InputText';
import Section from 'components/Section';
import LoaderSpinner from 'components/LoaderSpinner';
// import ActionCompass from 'components/ActionCompass';

export default () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!loading) {
      dispatch(setState('Room'));
    }
  }, [dispatch, loading]);

  return (
    <Section>
      <LoaderSpinner onAnimEnd={setLoading} />
    </Section>
  );
};
