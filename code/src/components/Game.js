import React from 'react'
import { useSelector } from 'react-redux';

const Quotes = () => {
  const response = useSelector((state) => state.game.response);

  return (
    <>
      <p>{response.description}</p>
      <button type="button"> test 2</button>
    </>
  );
};
export default Quotes;