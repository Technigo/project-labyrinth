import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/loader";
import styled from "styled-components";

const LoadingContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #1a1a1a;
	position: absolute;
`;

export const Loader = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<LoadingContainer>
			<Lottie options={defaultOptions} height={300} width={300} />
		</LoadingContainer>
	);
};
