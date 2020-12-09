import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const MyCircularProgress = styled(CircularProgress)`
  margin: 30px 0;
`;

export const LoadingIndicator = () =>{
    const isLoading = useSelector((state) => state.ui.isLoading); 
    
  return (
    <>
    {isLoading &&  <MyCircularProgress />}
    </>
  )
}