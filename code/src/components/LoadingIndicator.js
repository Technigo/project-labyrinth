import React from "react";
import { useSelector } from "react-redux";

import Lottie from "react-lottie";
import animationData from "../animations/66433-loader.json"; 
import styled from "styled-components"; 

const Div = styled.div`
	background: #161B22;
	height: 100vh;
  width: 100vw;
	background-position: center;
	background-repeat: no-repeat;
	/* background-size: cover; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Text = styled.p`	
	color: #ffffff;
	font-size: 20px;
	font-family: 'Press Start 2P';
`;

export const LoadingIndicator = () => {
  const loading = useSelector((state) => state.ui.isLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
		animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <> 
  {loading && 
      <Div>
				<Text>Loading ...</Text>
        <Lottie options={defaultOptions} height={200} width={400} />
      </Div>
  }
  </>
)};

