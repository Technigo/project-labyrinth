import React from 'react';
import Lottie from 'react-lottie'
import animationData from '../animations/loading-double'

import { useSelector } from 'react-redux';

export const Loading = () => {
	const loading = useSelector(store => store.labyrinthSlice.loading)

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		renderSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	return (
		<>
			{loading && <Lottie options={defaultOptions} height={400} width={400} />}
		</>
	);
};
