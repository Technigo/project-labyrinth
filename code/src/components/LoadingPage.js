import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const LoadingPage = () => {
    const loading = useSelector((store) => store.questions.loading)
    return (
      <div>
        {loading && (
            <h1>Loading....</h1>
        )}
      </div>
    )
  }