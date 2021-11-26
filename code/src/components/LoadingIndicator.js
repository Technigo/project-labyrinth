import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/loading-double';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const EpicLoader = styled.div`
	position: absolute;
`;

export const LoadingIndicator = () => {
	const loading = useSelector((store) => store.coolestLoader.loading);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<EpicLoader>
			{loading && <Lottie options={defaultOptions} height={400} width={400} />}
		</EpicLoader>
	);
};
