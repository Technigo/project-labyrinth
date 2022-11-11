/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Start from './Start';
import Location from './Location';
import Loading from './Loading';

const Parent = () => {
  const username = useSelector((store) => store.labyrinth.username)
  const currentLocation = useSelector((store) => store.labyrinth)

  return (
    <OuterWrapper>
      <InnerWrapper>
        {currentLocation.isLoading ? <Loading /> : username === null ? <Start /> : <Location />}
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default Parent;

const OuterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InnerWrapper = styled.main`
  width: 100vw;
  @media (min-width: 600px) {
    width: 80%;
  }
`