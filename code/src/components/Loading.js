import React from 'react';
// import styled from "styled-components/macro";
import '@lottiefiles/lottie-player';
import { useSelector } from 'react-redux';

import { CenteredScreen } from '../lib/Styling';

// const Loader = styled.div`
//   border: 16px solid #f3f3f3;
//   border-top: 16px solid #ff6932;
//   border-radius: 50%;
//   width: 200px;
//   height: 200px;
//   animation: spin 2s linear infinite;

//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && (
        <CenteredScreen>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src={'https://assets9.lottiefiles.com/packages/lf20_q8m8gtvv.json'}
            style={{
              width: '80%',
              height: '80%',
              textAlign: 'center',
            }}>
          </lottie-player>
        </CenteredScreen>
      )}
      {/* {isLoading && <CenteredScreen><Loader /></CenteredScreen>} */}
    </>
  )
}