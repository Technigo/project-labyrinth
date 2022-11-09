import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from 'component/StartScreen';
import GameScreen from 'component/GameScreen';

const Questions = () => {
  const gameQuestions = useSelector((store) => store.questions.question);
  const isLoading = useSelector((store) => store.questions.isLoading);

  return (
    <div className="qustionsWarpper">
      {/* {!isLoading && (
        <div>{gameQuestions ? <GameScreen /> : <StartScreen />}</div>
      )} */}
    </div>
  );
};

export default Questions;
