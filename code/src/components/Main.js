import React from 'react';
import { useSelector } from 'react-redux';

import { Loading } from './Loading';
import { Question } from './Question';


export const Main = () => {
    const loading = useSelector((store) => store.ui.isLoading);

    return (
      <>
        {loading && <Loading />} 
        {!loading && <Question />}
      </>
  
    )
  }