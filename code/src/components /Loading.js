import React from 'react';
//import Lottie from 'lottie-react';
import animationData from '../lotties/loading.json';

const Loading = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={600} width={600} />
		</div>
	);
};

export default Loading;
