import React from 'react';
import { useSelector } from 'react-redux';
import UserInput from './UserInput';
import Quotes from './Quotes';
// import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

const MainParent = () => {
  const quote = useSelector((store) => store.quotes.quote);

  return (
    <div>
      {quote === '' ? <UserInput /> : <Quotes />}
    </div>
  )
}

export default MainParent;
